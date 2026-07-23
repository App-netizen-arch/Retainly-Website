import { useEffect, useRef, useState, type RefObject } from 'react';
import { Reveal } from '@/components/ui/Reveal';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { trackEvent } from '@/lib/analytics';

/**
 * Retainly product-walkthrough "video".
 *
 * This isn't an actual video file — it's a live-animated phone mockup with
 * synced narration, ported from the standalone demo prototype. Rendering it
 * as markup + CSS/JS (instead of an .mp4) keeps it crisp on every screen
 * size, keeps the bundle tiny, and lets the narration re-flow if copy ever
 * changes — but it's built and staged to read exactly like a recorded demo
 * video, complete with a poster frame, play/pause, scrubbing, and captions.
 */

const SCENES = [
  {
    id: 'intro',
    caption:
      'Meet Retainly — a distraction-free companion for Class 9 and 10 board-exam prep.',
  },
  {
    id: 'onboarding',
    caption:
      'Setup takes under a minute. Pick your class, board, subjects, and daily study time — no account wall, no long forms.',
  },
  {
    id: 'home',
    caption:
      'Home always answers one question — what should I study right now? One recommended task, a progress ring, and due revisions.',
  },
  {
    id: 'subjects',
    caption:
      'Every subject breaks down into chapters. Mark progress as you go, and the status updates instantly.',
  },
  {
    id: 'focus',
    caption:
      'A focus timer turns the plan into real timed study — and it logs practical-work status alongside it.',
  },
  {
    id: 'outro',
    caption: 'One next task. One focus session. Zero friction. Retainly.',
  },
] as const;

const LOGO_SRC =
  'data:image/png;base64,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';

// --- speech quality helpers -------------------------------------------------

function scoreVoice(v: SpeechSynthesisVoice): number {
  const name = v.name || '';
  let score = 0;
  if (/natural|neural|online/i.test(name)) score += 50;
  if (/google/i.test(name)) score += 20;
  if (/microsoft (aria|jenny|guy|sara|libby|ryan|ana)/i.test(name)) score += 30;
  if (/samantha|alex|daniel|karen|moira|tessa|serena/i.test(name)) score += 15;
  if (/zira|hazel|david/i.test(name)) score += 6;
  if (/compact|espeak|whisper|monotone/i.test(name)) score -= 40;
  if (/^en/i.test(v.lang)) score += 10;
  if (v.lang === 'en-US' || v.lang === 'en-GB') score += 5;
  return score;
}

function chooseVoice(): SpeechSynthesisVoice | null {
  if (!('speechSynthesis' in window) || typeof window.speechSynthesis.getVoices !== 'function') return null;
  const voices = window.speechSynthesis.getVoices() || [];
  if (!voices.length) return null;
  const english = voices.filter((v) => /en/i.test(v.lang));
  const pool = english.length ? english : voices;
  return [...pool].sort((a, b) => scoreVoice(b) - scoreVoice(a))[0] || voices[0];
}

/** Split a caption into natural speech clauses so pacing/pauses feel human, not flat. */
function splitIntoClauses(text: string): string[] {
  const parts = text.split(/(?<=[.!?])\s+|(?<=—)\s+/).map((p) => p.trim()).filter(Boolean);
  return parts.length ? parts : [text];
}

function estimatedDuration(text: string): number {
  const words = text.trim().split(/\s+/).length;
  return Math.max(4200, Math.round(words * 255));
}

export function DemoWalkthrough() {
  const rootRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const reducedMotion = useReducedMotion();
  const [started, setStarted] = useState(false);
  const [statusTime] = useState(() =>
    new Date().toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' })
  );

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const byId = <T extends HTMLElement,>(id: string) => root.querySelector<T>(`#${id}`);

    const els: Record<string, HTMLElement | null> = {};
    SCENES.forEach((s) => {
      els[s.id] = byId(`rw-scene-${s.id}`);
    });

    const caption = byId<HTMLDivElement>('rw-caption');
    const fill = byId<HTMLDivElement>('rw-fill');
    const progressBar = byId<HTMLDivElement>('rw-progressBar');
    const timeLabel = byId<HTMLSpanElement>('rw-timeLabel');
    const playBtn = byId<HTMLButtonElement>('rw-playBtn');
    const voiceBtn = byId<HTMLButtonElement>('rw-voiceBtn');
    const marksWrap = byId<HTMLDivElement>('rw-marks');

    if (!caption || !fill || !progressBar || !timeLabel || !playBtn || !voiceBtn || !marksWrap) return;

    const scenePause = 420;
    const sceneDurations = SCENES.map((s) => estimatedDuration(s.caption));
    const totalEstimate =
      sceneDurations.reduce((a, b) => a + b, 0) + scenePause * (SCENES.length - 1);

    marksWrap.innerHTML = '';
    SCENES.forEach((s) => {
      const m = document.createElement('span');
      m.textContent = s.id.charAt(0).toUpperCase() + s.id.slice(1);
      m.dataset.id = s.id;
      marksWrap.appendChild(m);
    });

    const fmt = (ms: number) => {
      const s = Math.floor(ms / 1000);
      const m = Math.floor(s / 60);
      return `${m}:${(s % 60).toString().padStart(2, '0')}`;
    };
    const clamp = (v: number, a: number, b: number) => Math.max(a, Math.min(b, v));
    const lerp = (t: number, a: number, b: number) => a + (b - a) * clamp(t, 0, 1);

    const tapDot = (id: string, show: boolean) => {
      const d = byId<HTMLElement>(id);
      if (!d) return;
      d.classList.toggle('show', show);
      if (!show) d.classList.remove('pulse');
    };
    const tapPulse = (id: string, on: boolean) => {
      const d = byId<HTMLElement>(id);
      if (!d) return;
      d.classList.toggle('pulse', on);
    };

    // ---------------- scene renderers (unchanged behavior, just scoped) ----------------

    function renderOnboarding(t: number) {
      const classField = byId<HTMLElement>('rw-obClass')!;
      const boardField = byId<HTMLElement>('rw-obBoard')!;
      const chkMath = byId<HTMLElement>('rw-chkMath')!;
      const chkPhysics = byId<HTMLElement>('rw-chkPhysics')!;
      const sliderFill = byId<HTMLElement>('rw-sliderFill')!;
      const sliderThumb = byId<HTMLElement>('rw-sliderThumb')!;
      const dot = 'rw-dotOnboarding';

      if (t >= 700) {
        classField.textContent = 'Class 9 / 10';
        classField.classList.add('filled');
      } else {
        classField.textContent = '\u00A0';
        classField.classList.remove('filled');
      }
      if (t >= 2200) {
        boardField.textContent = 'Punjab';
        boardField.classList.add('filled');
      } else {
        boardField.textContent = 'e.g., Punjab, Sindh';
        boardField.classList.remove('filled');
      }
      chkMath.classList.toggle('on', t >= 3600);
      chkPhysics.classList.toggle('on', t >= 5000);

      const sliderPct = lerp((t - 6500) / 2200, 20, 46);
      sliderFill.style.width = sliderPct + '%';
      sliderThumb.style.left = sliderPct + '%';

      const showDot = t >= 8200 && t <= 11600;
      tapDot(dot, showDot);
      tapPulse(dot, t >= 9400 && t <= 10400);
      if (showDot) {
        const d = byId<HTMLElement>(dot)!;
        d.style.left = '50%';
        d.style.top = 'calc(100% - 34px)';
      }
    }

    function renderHome(t: number) {
      const syllPct = byId<HTMLElement>('rw-syllPct')!;
      const syllFill = byId<HTMLElement>('rw-syllFill')!;
      const pct = Math.round(lerp((t - 700) / 2600, 0, 15));
      syllPct.textContent = String(pct);
      syllFill.style.width = pct + '%';

      const rec = byId<HTMLElement>('rw-recCard')!;
      rec.style.opacity = t >= 600 ? '1' : '0.35';

      const miniRow = byId<HTMLElement>('rw-miniRow')!;
      miniRow.style.transition = 'opacity .4s ease, transform .4s ease';
      miniRow.style.opacity = t >= 2300 ? '1' : '0';
      miniRow.style.transform = t >= 2300 ? 'translateY(0)' : 'translateY(8px)';

      const revCard = byId<HTMLElement>('rw-revCard')!;
      revCard.style.transition = 'opacity .4s ease, transform .4s ease';
      revCard.style.opacity = t >= 7200 ? '1' : '0';
      revCard.style.transform = t >= 7200 ? 'translateY(0)' : 'translateY(8px)';

      const dot = byId<HTMLElement>('rw-dotHome')!;
      const showDot = t >= 11800 && t <= 15000;
      tapDot('rw-dotHome', showDot);
      tapPulse('rw-dotHome', t >= 12800 && t <= 14000);
      if (showDot) {
        dot.style.right = '18px';
        dot.style.left = 'auto';
        dot.style.bottom = '18px';
        dot.style.top = 'auto';
        dot.style.position = 'absolute';
      }
      const navLabel = byId<HTMLElement>('rw-navSubjectsLabel')!;
      navLabel.style.color = t >= 13200 ? 'var(--rw-blue)' : '';
    }

    function renderSubjects(t: number) {
      const badge = byId<HTMLElement>('rw-ch2Badge')!;
      const markBtn = byId<HTMLElement>('rw-ch2MarkBtn')!;
      const done = t >= 7800;
      badge.textContent = done ? 'Done' : 'In Progress';
      badge.classList.toggle('amber', !done);
      badge.classList.toggle('green', done);

      const dot = byId<HTMLElement>('rw-dotSubjects')!;
      const showDot = t >= 6500 && t <= 10000;
      tapDot('rw-dotSubjects', showDot);
      tapPulse('rw-dotSubjects', t >= 7600 && t <= 9000);
      if (showDot) {
        const rect = markBtn.getBoundingClientRect();
        const parentRect = markBtn.closest('.rw-screen')!.getBoundingClientRect();
        dot.style.left = rect.left - parentRect.left + rect.width / 2 + 'px';
        dot.style.top = rect.top - parentRect.top + rect.height / 2 + 'px';
      }
    }

    function renderFocus(t: number) {
      const ring = root!.querySelector<SVGCircleElement>('#rw-ringProgress')!;
      const label = byId<HTMLElement>('rw-timerLabel')!;
      const btn = byId<HTMLElement>('rw-completeBtn')!;
      const bio = byId<HTMLElement>('rw-bioCheck')!;
      const toast = byId<HTMLElement>('rw-toast')!;
      const circumference = 402;

      const tapWindow = t >= 7200 && t <= 10800;
      tapDot('rw-dotFocus', tapWindow);
      tapPulse('rw-dotFocus', t >= 8300 && t <= 9800);
      if (tapWindow) {
        const d = byId<HTMLElement>('rw-dotFocus')!;
        d.style.left = '50%';
        d.style.bottom = '96px';
        d.style.top = 'auto';
      }

      const completed = t >= 12000;
      const progress = completed ? 1 : clamp(t / 12000, 0, 0.92);
      ring.style.stroke = completed ? '#3FBE84' : '#5B9BD8';
      ring.setAttribute('stroke-dashoffset', String(circumference * (1 - progress)));

      if (completed) {
        label.textContent = '00:00';
        btn.textContent = 'Session Completed \u2713';
        btn.classList.add('done');
      } else {
        const totalSec = 32 * 60 + 15;
        const remaining = Math.max(0, Math.round(totalSec - (t / 12000) * 900));
        const mm = Math.floor(remaining / 60);
        const ss = remaining % 60;
        label.textContent = `${mm}:${ss < 10 ? '0' : ''}${ss}`;
        btn.textContent = 'Complete Session';
        btn.classList.remove('done');
      }

      bio.classList.toggle('on', t >= 15000);
      bio.textContent = bio.classList.contains('on') ? '\u2713' : '';

      toast.classList.toggle('show', t >= 16500 && t <= 22500);
    }

    function renderOutro(t: number) {
      const items = root!.querySelectorAll('#rw-featureList li');
      items.forEach((li, i) => {
        const showAt = 900 + i * 1100;
        li.classList.toggle('show', t >= showAt);
      });
    }

    const renderers: Record<string, (t: number) => void> = {
      intro: () => {},
      onboarding: renderOnboarding,
      home: renderHome,
      subjects: renderSubjects,
      focus: renderFocus,
      outro: renderOutro,
    };

    // ---------------- playback engine ----------------

    let currentSceneIndex = 0;
    let sceneStart = performance.now();
    let pausedLocalT = 0;
    let playing = false;
    let finished = false;
    let voiceEnabled = true;
    let currentCaption = '';
    let narrationToken = 0;
    let fallbackTimer: ReturnType<typeof setTimeout> | null = null;
    let advanceTimer: ReturnType<typeof setTimeout> | null = null;
    let rafId = 0;
    let destroyed = false;

    const cancelTimers = () => {
      if (fallbackTimer) {
        clearTimeout(fallbackTimer);
        fallbackTimer = null;
      }
      if (advanceTimer) {
        clearTimeout(advanceTimer);
        advanceTimer = null;
      }
    };

    const cancelSpeech = () => {
      if ('speechSynthesis' in window) {
        try {
          window.speechSynthesis.cancel();
        } catch {
          /* noop */
        }
      }
    };

    const setVisibleScene = (index: number) => {
      SCENES.forEach((s, i) => {
        const el = els[s.id];
        if (!el) return;
        el.style.opacity = i === index ? '1' : '0';
        el.classList.toggle('on', i === index);
      });
    };

    const setCaption = (text: string) => {
      if (currentCaption === text && caption.textContent === text) return;
      currentCaption = text;
      caption.style.opacity = '0';
      setTimeout(() => {
        caption.textContent = currentCaption;
        caption.style.transition = 'opacity .28s ease';
        caption.style.opacity = '1';
      }, 80);
    };

    const progressEstimate = (localT: number) => {
      let total = 0;
      for (let i = 0; i < currentSceneIndex; i++) {
        total += sceneDurations[i];
        if (i < SCENES.length - 1) total += scenePause;
      }
      total += Math.min(localT, sceneDurations[currentSceneIndex] || 0);
      return total;
    };

    const renderCurrent = () => {
      const localT = Math.max(0, playing ? performance.now() - sceneStart : pausedLocalT);
      const scene = SCENES[currentSceneIndex];

      setVisibleScene(currentSceneIndex);
      setCaption(scene.caption);
      renderers[scene.id]?.(localT);

      const elapsed = progressEstimate(localT);
      fill.style.width = clamp(elapsed / totalEstimate, 0, 1) * 100 + '%';
      timeLabel.textContent = `${fmt(elapsed)} / ${fmt(totalEstimate)}`;

      marksWrap.querySelectorAll('span').forEach((m) => {
        const idx = SCENES.findIndex((sc) => sc.id === (m as HTMLElement).dataset.id);
        m.classList.toggle('active', idx === currentSceneIndex);
      });
    };

    function advanceScene() {
      cancelTimers();
      cancelSpeech();
      if (!playing) return;

      if (currentSceneIndex >= SCENES.length - 1) {
        finished = true;
        playing = false;
        playBtn!.textContent = '\u21BA';
        return;
      }
      currentSceneIndex += 1;
      sceneStart = performance.now();
      pausedLocalT = 0;
      startNarration();
    }

    function narrationFinishedFallback(token: number) {
      fallbackTimer = setTimeout(() => {
        if (token !== narrationToken) return;
        advanceScene();
      }, estimatedDuration(SCENES[currentSceneIndex].caption) + 1200);
    }

    /** Speak a scene as a chain of natural clauses with human-ish pacing/prosody, instead of one flat utterance. */
    function speakClauses(clauses: string[], i: number, token: number, onDone: () => void) {
      if (destroyed || token !== narrationToken) return;
      if (i >= clauses.length) {
        onDone();
        return;
      }
      const u = new SpeechSynthesisUtterance(clauses[i]);
      u.lang = 'en-US';
      const wobble = Math.abs(Math.sin(i * 12.9898 + currentSceneIndex * 4.4));
      u.rate = 0.95 + wobble * 0.08; // ~0.95–1.03, natural conversational pace
      u.pitch = 0.98 + (wobble - 0.5) * 0.08; // subtle micro-variation, avoids flat monotone
      u.volume = 1;
      const voice = chooseVoice();
      if (voice) u.voice = voice;

      u.onend = () => {
        if (token !== narrationToken) return;
        const pause = /[,;]$/.test(clauses[i]) ? 110 : 260;
        setTimeout(() => {
          if (token === narrationToken) speakClauses(clauses, i + 1, token, onDone);
        }, pause);
      };
      u.onerror = () => {
        if (token !== narrationToken) return;
        onDone();
      };

      window.speechSynthesis.speak(u);
    }

    function startNarration() {
      cancelTimers();
      if (!playing) return;

      const scene = SCENES[currentSceneIndex];
      setVisibleScene(currentSceneIndex);
      setCaption(scene.caption);

      if (!voiceEnabled || !('speechSynthesis' in window)) {
        narrationFinishedFallback(narrationToken);
        return;
      }

      narrationToken += 1;
      const token = narrationToken;
      cancelSpeech();

      const clauses = splitIntoClauses(scene.caption);
      speakClauses(clauses, 0, token, () => {
        if (token !== narrationToken) return;
        if (advanceTimer) clearTimeout(advanceTimer);
        advanceTimer = setTimeout(() => {
          if (token === narrationToken) advanceScene();
        }, scenePause);
      });

      fallbackTimer = setTimeout(() => {
        if (token !== narrationToken) return;
        if (window.speechSynthesis && window.speechSynthesis.speaking) return;
        advanceScene();
      }, estimatedDuration(scene.caption) + 2200);
    }

    function restartPlayback() {
      cancelTimers();
      cancelSpeech();
      finished = false;
      currentSceneIndex = 0;
      sceneStart = performance.now();
      pausedLocalT = 0;
      playing = true;
      playBtn!.textContent = '\u275A\u275A';
      startNarration();
    }

    function pausePlayback() {
      playing = false;
      pausedLocalT = Math.max(0, performance.now() - sceneStart);
      playBtn!.textContent = '\u25BA';
      cancelTimers();
      cancelSpeech();
      renderCurrent();
    }

    function resumePlayback() {
      if (finished) {
        restartPlayback();
        return;
      }
      playing = true;
      playBtn!.textContent = '\u275A\u275A';
      sceneStart = performance.now();
      pausedLocalT = 0;
      startNarration();
    }

    const onPlayClick = () => {
      if (!started) {
        setStarted(true);
        trackEvent('demo_walkthrough_play', {});
      }
      if (finished) {
        restartPlayback();
      } else if (playing) {
        pausePlayback();
      } else {
        resumePlayback();
      }
    };

    const onVoiceClick = () => {
      voiceEnabled = !voiceEnabled;
      voiceBtn!.textContent = voiceEnabled ? '\uD83D\uDD0A' : '\uD83D\uDD07';
      voiceBtn!.classList.toggle('off', !voiceEnabled);
      voiceBtn!.setAttribute('aria-pressed', String(voiceEnabled));
      if (!voiceEnabled) {
        cancelTimers();
        cancelSpeech();
      } else if (playing) {
        startNarration();
      }
    };

    const onSeek = (e: MouseEvent | TouchEvent) => {
      if ((e as Event).cancelable) e.preventDefault();
      const rect = progressBar!.getBoundingClientRect();
      const clientX = 'touches' in e ? e.touches[0].clientX : (e as MouseEvent).clientX;
      const frac = clamp((clientX - rect.left) / rect.width, 0, 1);

      const target = frac * totalEstimate;
      let acc = 0;
      let idx = 0;
      for (let i = 0; i < SCENES.length; i++) {
        const block = sceneDurations[i] + (i < SCENES.length - 1 ? scenePause : 0);
        if (target <= acc + block) {
          idx = i;
          break;
        }
        acc += block;
        idx = i;
      }

      if (!started) setStarted(true);
      currentSceneIndex = idx;
      pausedLocalT = Math.max(0, target - acc);
      sceneStart = performance.now() - pausedLocalT;
      finished = false;
      playing = true;
      playBtn!.textContent = '\u275A\u275A';
      startNarration();
    };

    playBtn.addEventListener('click', onPlayClick);
    voiceBtn.addEventListener('click', onVoiceClick);
    progressBar.addEventListener('click', onSeek);
    progressBar.addEventListener('touchstart', onSeek, { passive: false });

    const onVoicesChanged = () => {
      if (playing && voiceEnabled && currentSceneIndex === 0 && !window.speechSynthesis.speaking) {
        startNarration();
      }
    };
    if ('speechSynthesis' in window && 'onvoiceschanged' in window.speechSynthesis) {
      window.speechSynthesis.addEventListener('voiceschanged', onVoicesChanged);
    }

    setVisibleScene(0);
    setCaption(SCENES[0].caption);
    renderCurrent();

    const loop = () => {
      if (destroyed) return;
      renderCurrent();
      rafId = requestAnimationFrame(loop);
    };
    rafId = requestAnimationFrame(loop);

    return () => {
      destroyed = true;
      cancelTimers();
      cancelSpeech();
      cancelAnimationFrame(rafId);
      playBtn.removeEventListener('click', onPlayClick);
      voiceBtn.removeEventListener('click', onVoiceClick);
      progressBar.removeEventListener('click', onSeek);
      progressBar.removeEventListener('touchstart', onSeek);
      if ('speechSynthesis' in window) {
        window.speechSynthesis.removeEventListener('voiceschanged', onVoicesChanged);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section
      id="demo"
      className="section-padding bg-brand-alt"
      aria-labelledby="demo-heading"
      ref={sectionRef}
    >
      <div className="content-max">
        <Reveal className="text-center mb-12">
          <h2 id="demo-heading" className="font-display font-bold text-brand text-h2 mb-4">
            Watch the walkthrough
          </h2>
          <p className="text-brand-muted text-body-lg max-w-2xl mx-auto">
            A guided, narrated tour of Retainly — from first setup to a completed focus
            session — right on this page.
          </p>
        </Reveal>

        <Reveal>
          <div ref={rootRef} className="rw-root">
            <div className="rw-heading">
              <div className="rw-widget-title">Retainly</div>
              <p>Product walkthrough · synced narration · Android / Flutter MVP</p>
            </div>

            <div className="rw-stage">
              <div className="rw-caption" id="rw-caption" />

              <div className="rw-phone-wrap">
                <div className="rw-phone-glow" aria-hidden="true" />
                <div className="rw-phone">
                  <div className="rw-notch" />
                  <div className="rw-screen-frame">
                    <div className="rw-screen-glare" aria-hidden="true" />
                    <div className="rw-screens">
                      {/* INTRO */}
                      <section className="rw-screen" id="rw-scene-intro">
                        <div className="rw-statusbar">
                          <span>{statusTime}</span>
                          <StatusIcons />
                        </div>
                        <div className="rw-screen-body rw-intro-body">
                          <div className="rw-intro-icon">
                            <img src={LOGO_SRC} alt="Retainly logo" className="rw-logo-image" />
                          </div>
                          <div className="rw-h1">Retainly</div>
                          <p>The best next task, right when you need it.</p>
                          {!started && (
                            <button
                              type="button"
                              className="rw-poster-play focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                              onClick={() => clickTargetById(rootRef, 'rw-playBtn')?.click()}
                              aria-label="Play walkthrough"
                            >
                              ▶ Play demo
                            </button>
                          )}
                        </div>
                      </section>

                      {/* ONBOARDING */}
                      <section className="rw-screen" id="rw-scene-onboarding">
                        <div className="rw-statusbar">
                          <span>{statusTime}</span>
                          <StatusIcons />
                        </div>
                        <div className="rw-screen-body">
                          <div className="rw-ob-header">
                            <span>←</span>
                            <div className="rw-h2">Set Up Your Plan</div>
                          </div>
                          <div className="rw-ob-progress">
                            <div className="done" />
                            <div className="done" />
                            <div />
                          </div>

                          <div>
                            <div className="rw-field-label">Class</div>
                            <div className="rw-field" id="rw-obClass">
                              &nbsp;
                            </div>
                          </div>
                          <div>
                            <div className="rw-field-label">Board</div>
                            <div className="rw-field" id="rw-obBoard">
                              e.g., Punjab, Sindh
                            </div>
                          </div>
                          <div>
                            <div className="rw-field-label">Subjects</div>
                            <div className="rw-search-mini">🔍 Search subjects…</div>
                            <ul className="rw-subject-list" style={{ marginTop: 8 }}>
                              <li>
                                <span>📐 Mathematics</span>
                                <span className="rw-chk" id="rw-chkMath" />
                              </li>
                              <li>
                                <span>⚛️ Physics</span>
                                <span className="rw-chk" id="rw-chkPhysics" />
                              </li>
                              <li>
                                <span>🧪 Chemistry</span>
                                <span className="rw-chk" />
                              </li>
                              <li>
                                <span>📖 Urdu</span>
                                <span className="rw-chk" />
                              </li>
                            </ul>
                          </div>
                          <div>
                            <div className="rw-field-label">Daily Study Time (e.g., 90 Minutes)</div>
                            <div className="rw-slider-track">
                              <div className="rw-slider-fill" id="rw-sliderFill" />
                              <div className="rw-slider-thumb" id="rw-sliderThumb" />
                            </div>
                          </div>
                          <div className="rw-cta rw-ob-cta">Get Started</div>
                        </div>
                        <div className="rw-tap-dot" id="rw-dotOnboarding" />
                      </section>

                      {/* HOME */}
                      <section className="rw-screen" id="rw-scene-home">
                        <div className="rw-statusbar">
                          <span>{statusTime}</span>
                          <StatusIcons />
                        </div>
                        <div className="rw-screen-body">
                          <div className="rw-home-header">
                            <div>
                              <div className="rw-h2">Hi Sameer!</div>
                              <p>Home / Study Now Dashboard</p>
                            </div>
                            <div className="rw-avatar">🙂</div>
                          </div>

                          <div className="rw-card rw-recommended" id="rw-recCard">
                            <span className="rw-eyebrow">RECOMMENDED NEXT TASK</span>
                            <div className="rw-h3">Math Ch. 4: Numerical (45 min)</div>
                            <div className="rw-rec-row">
                              <div className="rw-ring-small">05</div>
                              <div className="rw-cta rw-small">Start Focus Session</div>
                            </div>
                          </div>

                          <div className="rw-mini-row" id="rw-miniRow">
                            <div className="rw-card rw-mini-card">
                              <div className="rw-mlabel">TODAY&apos;S PLAN</div>
                              <strong>2 priority tasks</strong>
                            </div>
                            <div className="rw-card rw-mini-card">
                              <div className="rw-mlabel">TOMORROW&apos;S PRIORITY</div>
                              <div className="rw-bars">
                                <span style={{ height: 6 }} />
                                <span style={{ height: 10 }} />
                                <span style={{ height: 14 }} />
                                <span style={{ height: 16 }} />
                                <span style={{ height: 6 }} />
                              </div>
                            </div>
                          </div>

                          <div className="rw-card rw-syllabus">
                            <div className="rw-mlabel">
                              OVERALL SYLLABUS (<span id="rw-syllPct">0</span>% Complete)
                            </div>
                            <div className="rw-bar-track">
                              <div className="rw-bar-fill" id="rw-syllFill" />
                            </div>
                          </div>

                          <div className="rw-section">Revision Queue</div>
                          <div className="rw-card rw-revision" id="rw-revCard">
                            <span>⚛️ Physics Ch. 1</span>
                            <span className="rw-due">Due Review ›</span>
                          </div>
                        </div>
                        <div className="rw-bottom-nav">
                          <span className="active">🏠 Home</span>
                          <span>📅 Planner</span>
                          <span id="rw-navSubjectsLabel">📚 Subjects</span>
                          <span>… More</span>
                        </div>
                        <div className="rw-tap-dot" id="rw-dotHome" />
                      </section>

                      {/* SUBJECTS */}
                      <section className="rw-screen" id="rw-scene-subjects">
                        <div className="rw-statusbar">
                          <span>{statusTime}</span>
                          <StatusIcons />
                        </div>
                        <div className="rw-screen-body">
                          <div className="rw-subj-header">
                            <span>☰</span>
                            <div className="rw-search-bar">
                              Search <span className="rw-filter-chip">⚙ Filters</span>
                            </div>
                          </div>
                          <div className="rw-card rw-subj-row">
                            <span>🧪 Chemistry</span>
                            <span className="rw-pct">22%</span>
                          </div>
                          <div className="rw-card rw-subj-row">
                            <span>📐 Mathematics ▾</span>
                            <span />
                          </div>
                          <div className="rw-chapters-wrap">
                            <div className="rw-chapter-row">
                              <div className="rw-ctop">
                                <strong>Ch. 1 Matrices</strong>
                                <span className="rw-badge green">Done</span>
                              </div>
                              <div className="rw-cactions">
                                <div className="rw-ghost">Mark as Done</div>
                                <div className="rw-ghost">Add Revision</div>
                              </div>
                            </div>
                            <div className="rw-chapter-row">
                              <div className="rw-ctop">
                                <strong>Ch. 2 Real Numbers</strong>
                                <span className="rw-badge amber" id="rw-ch2Badge">
                                  In Progress
                                </span>
                              </div>
                              <div className="rw-cactions">
                                <div className="rw-ghost" id="rw-ch2MarkBtn">
                                  Mark as Done
                                </div>
                                <div className="rw-ghost">View PDFs</div>
                              </div>
                            </div>
                            <div className="rw-chapter-row">
                              <div className="rw-ctop">
                                <strong>Ch. 3 Logarithms</strong>
                                <span className="rw-badge grey">Not Started</span>
                              </div>
                              <div className="rw-cactions">
                                <div className="rw-ghost">Mark as Done</div>
                                <div className="rw-ghost">View PDFs</div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="rw-bottom-nav">
                          <span>🏠 Home</span>
                          <span>📅 Planner</span>
                          <span className="active">📚 Subjects</span>
                          <span>… More</span>
                        </div>
                        <div className="rw-tap-dot" id="rw-dotSubjects" />
                      </section>

                      {/* FOCUS */}
                      <section className="rw-screen rw-focus-screen" id="rw-scene-focus">
                        <div className="rw-statusbar" style={{ color: '#fff' }}>
                          <span>{statusTime}</span>
                          <StatusIcons light />
                        </div>
                        <div className="rw-screen-body">
                          <div className="rw-focus-header">
                            <span>←</span>
                            <div className="rw-h3">
                              Physics – Numerical
                              <br />
                              Ch. 5 Wave Motion
                            </div>
                            <span>⋮</span>
                          </div>
                          <div className="rw-ring-wrap">
                            <svg width="150" height="150" viewBox="0 0 150 150">
                              <circle cx="75" cy="75" r="64" fill="none" stroke="#2C4468" strokeWidth={10} />
                              <circle
                                id="rw-ringProgress"
                                cx="75"
                                cy="75"
                                r="64"
                                fill="none"
                                stroke="#5B9BD8"
                                strokeWidth={10}
                                strokeLinecap="round"
                                strokeDasharray="402"
                                strokeDashoffset="402"
                                transform="rotate(-90 75 75)"
                              />
                              <text x="75" y="83" textAnchor="middle" className="rw-timer-label" id="rw-timerLabel">
                                32:15
                              </text>
                            </svg>
                          </div>
                          <div className="rw-complete-btn" id="rw-completeBtn">
                            Complete Session
                          </div>
                          <p className="rw-estimate">⏱ Estimated: 45 min</p>

                          <div className="rw-practical-card">
                            <div className="rw-ph">
                              <span>PRACTICAL RECORDS</span>
                              <span>STATUS</span>
                            </div>
                            <div className="rw-prow">
                              <span>
                                🧪 Chemistry
                                <br />
                                <small>Due Oct 11, 2023</small>
                              </span>
                              <span className="rw-check on">✓</span>
                            </div>
                            <div className="rw-prow">
                              <span>
                                🧬 Biology
                                <br />
                                <small>Due Oct 15, 2023</small>
                              </span>
                              <span className="rw-check" id="rw-bioCheck" />
                            </div>
                          </div>
                        </div>
                        <div className="rw-toast" id="rw-toast">
                          Nice! A quick revision for Wave Motion has been queued.
                        </div>
                        <div className="rw-tap-dot" id="rw-dotFocus" />
                      </section>

                      {/* OUTRO */}
                      <section className="rw-screen" id="rw-scene-outro">
                        <div className="rw-statusbar">
                          <span>{statusTime}</span>
                          <StatusIcons />
                        </div>
                        <div className="rw-screen-body rw-outro-body">
                          <div className="rw-app-icon">
                            <img src={LOGO_SRC} alt="Retainly logo" className="rw-logo-image" />
                          </div>
                          <div className="rw-h2">Retainly</div>
                          <p className="rw-tag">Your next task, right on time.</p>
                          <ul className="rw-feature-recap" id="rw-featureList">
                            <li>Offline-first smart planner</li>
                            <li>Syllabus &amp; practical tracking</li>
                            <li>Spaced revision queue</li>
                            <li>Focus timer with session logging</li>
                          </ul>
                          <p className="rw-foot">Built with Flutter · Dart · Riverpod · Drift/SQLite</p>
                        </div>
                      </section>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rw-controls">
                <button
                  id="rw-playBtn"
                  aria-label="Play or pause"
                  className="focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                >
                  ▶
                </button>
                <button
                  id="rw-voiceBtn"
                  aria-pressed="true"
                  aria-label="Toggle narration"
                  className="focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                >
                  🔊
                </button>
                <div className="rw-progress-wrap">
                  <div className="rw-progress" id="rw-progressBar">
                    <div className="rw-fill" id="rw-fill" />
                  </div>
                  <div className="rw-marks" id="rw-marks" />
                </div>
                <span id="rw-timeLabel">0:00 / 0:00</span>
              </div>
            </div>
          </div>
        </Reveal>

        {reducedMotion && (
          <p className="text-center text-brand-muted text-meta mt-4">
            Motion is reduced on your device — tap Play above whenever you&apos;d like to view it.
          </p>
        )}
      </div>

      <style>{DEMO_STYLES}</style>
    </section>
  );
}

function StatusIcons({ light = false }: { light?: boolean }) {
  const stroke = light ? '#fff' : '#1B2230';
  return (
    <span className="rw-status-icons" aria-hidden="true">
      <svg width="16" height="11" viewBox="0 0 16 11" fill="none">
        <rect x="0" y="7" width="2.4" height="4" rx="0.6" fill={stroke} />
        <rect x="4" y="5" width="2.4" height="6" rx="0.6" fill={stroke} />
        <rect x="8" y="3" width="2.4" height="8" rx="0.6" fill={stroke} />
        <rect x="12" y="0.5" width="2.4" height="10.5" rx="0.6" fill={stroke} />
      </svg>
      <svg width="18" height="11" viewBox="0 0 18 11" fill="none">
        <rect x="0.5" y="1.5" width="14" height="8" rx="2" stroke={stroke} strokeWidth="1" fill="none" />
        <rect x="2" y="3" width={9} height={5} rx="1" fill={stroke} />
        <rect x="15" y="4" width="1.6" height="3" rx="0.6" fill={stroke} />
      </svg>
    </span>
  );
}

function clickTargetById(ref: RefObject<HTMLDivElement>, id: string) {
  return ref.current?.querySelector<HTMLButtonElement>(`#${id}`) ?? null;
}

const DEMO_STYLES = `
.rw-root{
  --rw-navy:#1B2E4C;
  --rw-navy-deep:#132238;
  --rw-blue:#10B981;
  --rw-blue-light:#E9F1F9;
  --rw-bg:#EDE8DD;
  --rw-card:#FFFFFF;
  --rw-green:#2E7D5B;
  --rw-green-bg:#E4F3EC;
  --rw-amber:#C98A1F;
  --rw-amber-bg:#FBF0DC;
  --rw-grey:#8A93A6;
  --rw-grey-bg:#F1F2F5;
  --rw-text:#1B2230;
  --rw-text-soft:#63697A;
  --rw-radius:26px;
  display:flex;
  flex-direction:column;
  align-items:center;
  background:var(--rw-bg);
  border-radius:32px;
  padding:32px 16px 40px;
  overflow:hidden;
}
.rw-root *{ box-sizing:border-box; }
.rw-heading{ text-align:center; margin-bottom:6px; }
.rw-heading .rw-widget-title{ font-size:20px; letter-spacing:.2px; margin:0 0 4px; font-weight:700; color:var(--rw-text); font-family: inherit; }
.rw-heading p{ margin:0; font-size:13px; color:var(--rw-text-soft); }
.rw-stage{ display:flex; flex-direction:column; align-items:center; gap:16px; margin-top:10px; perspective:1400px; }
.rw-caption{ max-width:360px; min-height:44px; text-align:center; font-size:14.5px; line-height:1.45; color:var(--rw-text); font-weight:500; padding:0 8px; }

.rw-phone-wrap{ position:relative; }
.rw-phone-glow{
  position:absolute; inset:-40px; z-index:0;
  background:radial-gradient(closest-side, rgba(16,185,129,.28), rgba(59,130,246,.18) 55%, transparent 75%);
  filter:blur(28px);
  opacity:.8;
}
.rw-phone{
  position:relative; z-index:1;
  width:300px; height:614px; background:#0f172a; border-radius:44px; padding:12px;
  box-shadow:0 30px 60px -12px rgba(0,0,0,.4), 0 0 0 2px #0b1220, inset 0 0 0 1px rgba(255,255,255,.04);
  transform:rotateX(1.5deg) rotateY(-2deg);
  animation:rwPhoneFloat 7s ease-in-out infinite;
}
@keyframes rwPhoneFloat{
  0%,100%{ transform:rotateX(1.5deg) rotateY(-2deg) translateY(0); }
  50%{ transform:rotateX(1.5deg) rotateY(-2deg) translateY(-5px); }
}
.rw-notch{ position:absolute; top:12px; left:50%; transform:translateX(-50%); width:64px; height:18px; background:#0f172a; border-radius:0 0 14px 14px; z-index:6; }
.rw-notch::after{ content:""; position:absolute; left:50%; top:5px; transform:translateX(-50%); width:8px; height:8px; border-radius:50%; background:#1e293b; }
.rw-screen-frame{ position:relative; width:100%; height:100%; background:var(--rw-card); border-radius:32px; overflow:hidden; }
.rw-screen-glare{
  position:absolute; inset:0; z-index:5; pointer-events:none;
  background:linear-gradient(115deg, rgba(255,255,255,.16) 0%, rgba(255,255,255,0) 18%, rgba(255,255,255,0) 82%, rgba(255,255,255,.05) 100%);
  mix-blend-mode:screen;
}
.rw-statusbar{ display:flex; justify-content:space-between; align-items:center; padding:10px 20px 4px; font-size:12px; font-weight:600; color:var(--rw-text); }
.rw-status-icons{ display:flex; align-items:center; gap:5px; }
.rw-screens{ position:absolute; top:0; left:0; right:0; bottom:0; }
.rw-screen{
  position:absolute; top:0; left:0; right:0; bottom:0; opacity:0; pointer-events:none;
  display:flex; flex-direction:column; transform:translateY(10px);
  transition:opacity .4s cubic-bezier(.22,1,.36,1), transform .4s cubic-bezier(.22,1,.36,1);
}
.rw-screen.on{ transform:translateY(0); }
.rw-screen-body{ padding:0 18px 14px; overflow:hidden; flex:1; display:flex; flex-direction:column; gap:12px; }

.rw-bottom-nav{ display:flex; justify-content:space-around; padding:10px 6px 14px; border-top:1px solid #ECEBE6; font-size:10.5px; color:var(--rw-text-soft); font-weight:600; background:var(--rw-card); }
.rw-bottom-nav span.active{ color:var(--rw-blue); }
.rw-card{ background:var(--rw-card); border-radius:16px; padding:12px 14px; box-shadow:0 1px 3px rgba(20,30,50,.08), 0 0 0 1px #EFEEE9; }
.rw-cta{ background:var(--rw-blue); color:#fff; border:none; border-radius:12px; padding:11px 16px; font-size:13px; font-weight:700; letter-spacing:.2px; cursor:default; }
.rw-ghost{ background:var(--rw-grey-bg); color:var(--rw-text-soft); border:none; border-radius:9px; padding:6px 10px; font-size:11px; font-weight:600; }
.rw-badge{ font-size:10.5px; font-weight:700; padding:3px 9px; border-radius:20px; }
.rw-badge.green{ background:var(--rw-green-bg); color:var(--rw-green); }
.rw-badge.amber{ background:var(--rw-amber-bg); color:var(--rw-amber); }
.rw-badge.grey{ background:var(--rw-grey-bg); color:var(--rw-grey); }

.rw-tap-dot{
  position:absolute; width:34px; height:34px; border-radius:50%;
  background:rgba(16,185,129,.24); border:2px solid var(--rw-blue);
  transform:translate(-50%,-50%) scale(0); opacity:0; pointer-events:none;
  transition:transform .18s ease, opacity .18s ease; z-index:20;
}
.rw-tap-dot.show{ opacity:1; transform:translate(-50%,-50%) scale(1); }
.rw-tap-dot.show::after{
  content:""; position:absolute; inset:-6px; border-radius:50%;
  border:2px solid rgba(16,185,129,.55);
  animation:rwRipple 900ms cubic-bezier(.22,1,.36,1) infinite;
}
.rw-tap-dot.pulse{ transform:translate(-50%,-50%) scale(1.5); }
@keyframes rwRipple{
  0%{ transform:scale(.7); opacity:.9; }
  100%{ transform:scale(1.9); opacity:0; }
}

.rw-intro-body{ align-items:center; justify-content:center; text-align:center; gap:10px; padding:0 30px; }
.rw-intro-icon{ width:74px; height:74px; border-radius:20px; background:linear-gradient(145deg,var(--rw-blue),var(--rw-navy)); display:flex; align-items:center; justify-content:center; margin-bottom:8px; box-shadow:0 10px 22px rgba(27,46,76,.35); overflow:hidden; }
.rw-intro-icon .rw-logo-image, .rw-app-icon .rw-logo-image{ width:100%; height:100%; object-fit:cover; display:block; }
.rw-intro-body .rw-h1{ font-size:19px; margin:0; }
.rw-intro-body p{ font-size:12.5px; color:var(--rw-text-soft); margin:0; }
.rw-poster-play{
  margin-top:14px; background:var(--rw-blue); color:#fff; border:none; border-radius:24px;
  padding:11px 22px; font-size:13px; font-weight:700; letter-spacing:.2px; cursor:pointer;
  box-shadow:0 10px 24px rgba(16,185,129,.35);
}

.rw-ob-header{ display:flex; align-items:center; gap:10px; padding:2px 0 4px; }
.rw-ob-header span{ font-size:16px; }
.rw-ob-header .rw-h2{ font-size:16px; margin:0; }
.rw-ob-progress{ display:flex; gap:5px; margin-bottom:6px; }
.rw-ob-progress div{ flex:1; height:4px; border-radius:2px; background:#E7E4DC; }
.rw-ob-progress div.done{ background:var(--rw-blue); }
.rw-field-label{ font-size:11px; font-weight:700; color:var(--rw-text-soft); margin-bottom:2px; }
.rw-field{ border:1.5px solid #DEDBD2; border-radius:10px; padding:9px 11px; font-size:12.5px; color:var(--rw-text-soft); min-height:16px; }
.rw-field.filled{ color:var(--rw-text); border-color:var(--rw-blue); }
.rw-search-mini{ border:1.5px solid #DEDBD2; border-radius:10px; padding:8px 11px; font-size:12px; color:var(--rw-text-soft); }
.rw-subject-list{ list-style:none; margin:0; padding:0; display:flex; flex-direction:column; gap:6px; }
.rw-subject-list li{ display:flex; justify-content:space-between; align-items:center; font-size:12.5px; padding:2px 0; }
.rw-chk{ width:17px; height:17px; border-radius:5px; border:1.5px solid #C9C6BC; display:flex; align-items:center; justify-content:center; font-size:11px; color:#fff; font-weight:700; }
.rw-chk.on{ background:var(--rw-blue); border-color:var(--rw-blue); }
.rw-slider-track{ position:relative; height:5px; border-radius:3px; background:#E7E4DC; margin:10px 2px 2px; }
.rw-slider-fill{ position:absolute; left:0; top:0; bottom:0; border-radius:3px; background:var(--rw-blue); width:20%; }
.rw-slider-thumb{ position:absolute; top:50%; width:15px; height:15px; border-radius:50%; background:var(--rw-blue); left:20%; transform:translate(-50%,-50%); box-shadow:0 0 0 4px #fff, 0 1px 4px rgba(0,0,0,.25); }
.rw-ob-cta{ margin-top:auto; width:100%; padding:13px; border-radius:12px; }

.rw-home-header{ display:flex; justify-content:space-between; align-items:flex-start; padding-top:2px; }
.rw-home-header .rw-h2{ margin:0; font-size:17px; }
.rw-home-header p{ margin:1px 0 0; font-size:11.5px; color:var(--rw-text-soft); }
.rw-avatar{ width:32px; height:32px; border-radius:50%; background:var(--rw-blue-light); display:flex; align-items:center; justify-content:center; font-size:16px; }
.rw-card.rw-recommended{ background:var(--rw-navy); color:#fff; }
.rw-eyebrow{ font-size:9.5px; letter-spacing:.6px; font-weight:700; color:#9FB3CC; }
.rw-card.rw-recommended .rw-h3{ margin:6px 0 10px; font-size:14.5px; }
.rw-rec-row{ display:flex; align-items:center; justify-content:space-between; }
.rw-ring-small{ width:34px; height:34px; border-radius:50%; border:3px solid #ffffff55; display:flex; align-items:center; justify-content:center; font-size:11px; font-weight:700; color:#fff; }
.rw-cta.rw-small{ padding:8px 12px; font-size:11.5px; }
.rw-mini-row{ display:flex; gap:10px; }
.rw-mini-card{ flex:1; padding:10px 12px; }
.rw-mini-card .rw-mlabel{ font-size:9px; font-weight:700; color:var(--rw-text-soft); letter-spacing:.4px; }
.rw-mini-card strong{ display:block; font-size:13px; margin-top:3px; }
.rw-bars{ display:flex; align-items:flex-end; gap:3px; height:16px; margin-top:4px; }
.rw-bars span{ width:5px; background:var(--rw-blue); border-radius:2px; }
.rw-card.rw-syllabus .rw-mlabel{ font-size:9.5px; font-weight:700; color:var(--rw-text-soft); }
.rw-bar-track{ height:7px; border-radius:4px; background:#EDEBE4; margin-top:8px; }
.rw-bar-fill{ height:100%; border-radius:4px; background:var(--rw-blue); width:0%; }
.rw-section{ margin:0; font-size:12.5px; color:var(--rw-text-soft); }
.rw-card.rw-revision{ display:flex; justify-content:space-between; align-items:center; font-size:12.5px; }
.rw-due{ color:var(--rw-blue); font-weight:700; font-size:11.5px; }

.rw-subj-header{ display:flex; align-items:center; gap:10px; }
.rw-search-bar{ flex:1; border:1.5px solid #E2DFD6; border-radius:10px; padding:8px 12px; font-size:12px; color:var(--rw-text-soft); display:flex; justify-content:space-between; }
.rw-filter-chip{ color:var(--rw-blue); font-weight:700; font-size:11px; }
.rw-subj-row{ display:flex; justify-content:space-between; align-items:center; font-size:13px; font-weight:600; }
.rw-subj-row .rw-pct{ color:var(--rw-blue); font-weight:700; font-size:12px; }
.rw-chapters-wrap{ display:flex; flex-direction:column; gap:8px; margin-top:-2px; }
.rw-chapter-row{ background:var(--rw-card); border-radius:14px; padding:9px 12px; box-shadow:0 1px 3px rgba(20,30,50,.06), 0 0 0 1px #EFEEE9; display:flex; flex-direction:column; gap:6px; }
.rw-chapter-row .rw-ctop{ display:flex; justify-content:space-between; align-items:center; font-size:12.5px; }
.rw-chapter-row .rw-cactions{ display:flex; gap:6px; }

.rw-focus-screen{ background:var(--rw-navy); color:#fff; }
.rw-focus-header{ display:flex; align-items:center; justify-content:space-between; padding-top:4px; }
.rw-focus-header .rw-h3{ margin:0; font-size:14px; text-align:center; flex:1; font-weight:600; line-height:1.3; }
.rw-ring-wrap{ display:flex; justify-content:center; margin:14px 0 6px; }
.rw-timer-label{ font-size:34px; font-weight:800; fill:#fff; font-family:inherit; }
.rw-estimate{ text-align:center; font-size:11px; color:#B8C6DA; margin:0; }
.rw-complete-btn{ margin:12px auto 0; display:block; background:#3E6FA6; color:#fff; border:none; border-radius:22px; padding:11px 26px; font-size:13px; font-weight:700; }
.rw-complete-btn.done{ background:var(--rw-green); }
.rw-practical-card{ background:#22385A; border-radius:16px; padding:12px 14px; margin-top:12px; }
.rw-practical-card .rw-ph{ display:flex; justify-content:space-between; font-size:11px; color:#9FB3CC; font-weight:700; margin-bottom:8px; }
.rw-prow{ display:flex; justify-content:space-between; align-items:center; font-size:12px; padding:6px 0; border-top:1px solid #2C4468; }
.rw-prow small{ color:#8FA2BC; font-size:10px; }
.rw-check{ width:18px; height:18px; border-radius:5px; border:1.5px solid #4E6789; display:flex; align-items:center; justify-content:center; font-size:12px; color:#fff; }
.rw-check.on{ background:var(--rw-green); border-color:var(--rw-green); }
.rw-toast{
  position:absolute; bottom:70px; left:16px; right:16px; background:#fff; color:var(--rw-text); border-radius:12px;
  padding:10px 12px; font-size:11.5px; font-weight:600; text-align:center; box-shadow:0 8px 20px rgba(0,0,0,.25);
  opacity:0; transform:translateY(10px); transition:opacity .3s ease, transform .3s ease;
}
.rw-toast.show{ opacity:1; transform:translateY(0); }

.rw-outro-body{ align-items:center; justify-content:center; text-align:center; gap:8px; padding:0 26px; }
.rw-outro-body .rw-app-icon{ width:60px; height:60px; border-radius:16px; background:linear-gradient(145deg,var(--rw-blue),var(--rw-navy)); display:flex; align-items:center; justify-content:center; margin-bottom:6px; overflow:hidden; }
.rw-outro-body .rw-h2{ font-size:18px; margin:0; }
.rw-outro-body p.rw-tag{ font-size:12px; color:var(--rw-text-soft); margin:0 0 6px; }
.rw-feature-recap{ list-style:none; margin:4px 0 8px; padding:0; display:flex; flex-direction:column; gap:6px; width:100%; }
.rw-feature-recap li{ font-size:11.5px; font-weight:600; background:var(--rw-blue-light); color:var(--rw-navy); border-radius:9px; padding:7px 10px; opacity:0; transform:translateY(6px); transition:opacity .35s ease, transform .35s ease; }
.rw-feature-recap li.show{ opacity:1; transform:translateY(0); }
.rw-outro-body .rw-foot{ font-size:10.5px; color:var(--rw-text-soft); margin-top:6px; }

.rw-controls{ width:320px; max-width:100%; display:flex; align-items:center; gap:10px; }
#rw-playBtn{ width:38px; height:38px; border-radius:50%; border:none; background:var(--rw-navy); color:#fff; font-size:14px; cursor:pointer; flex-shrink:0; }
#rw-voiceBtn{ width:42px; height:38px; border-radius:19px; border:none; background:var(--rw-blue); color:#fff; font-size:13px; font-weight:700; cursor:pointer; flex-shrink:0; }
#rw-voiceBtn.off{ background:var(--rw-grey); }
.rw-progress-wrap{ flex:1; }
.rw-progress{ position:relative; height:8px; background:#DEDACF; border-radius:5px; cursor:pointer; }
.rw-progress .rw-fill{ position:absolute; left:0; top:0; bottom:0; background:var(--rw-blue); border-radius:5px; width:0%; }
.rw-marks{ display:flex; justify-content:space-between; margin-top:5px; font-size:9.5px; color:var(--rw-text-soft); }
.rw-marks span{ opacity:.55; }
.rw-marks span.active{ opacity:1; color:var(--rw-blue); font-weight:700; }
#rw-timeLabel{ font-size:11.5px; color:var(--rw-text-soft); width:66px; text-align:right; flex-shrink:0; }

@media (max-width: 380px){
  .rw-phone{ width:260px; height:532px; }
  .rw-controls{ width:100%; }
}
`;
