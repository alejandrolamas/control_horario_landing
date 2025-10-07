/// <reference types="vite/client" />

import './style.css'
import Lenis from 'lenis'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

type Grecaptcha = {
  render?: (...args: any[]) => number
  reset(widgetId?: number): void
  getResponse(widgetId?: number): string
  ready?: (callback: () => void) => void
}

declare global {
  interface Window {
    grecaptcha?: Grecaptcha
  }
}

const RECAPTCHA_SITE_KEY = import.meta.env.VITE_RECAPTCHA_SITE_KEY ?? '6Lf72uErAAAAAOenjNz2PjqHX0Y5y49SWiUbsufK'

const app = document.getElementById('app')!
app.innerHTML = `
  <header class="fixed top-0 left-0 right-0 z-[100] border-b border-white/10 bg-background/70 backdrop-blur-xl">
    <div class="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
      <a href="#" class="font-display text-xl tracking-[0.4em] uppercase text-white">fichaje<span class="text-primary">.app</span></a>
      <nav class="hidden md:flex items-center gap-10 text-[0.68rem] uppercase tracking-[0.42em] text-white/50">
        <a href="#features" class="hover:text-white transition">Características</a>
        <a href="#benefits" class="hover:text-white transition">Beneficios</a>
        <a href="#pricing" class="hover:text-white transition">Precios</a>
        <a href="#contact" class="hover:text-white transition">Contacto</a>
      </nav>
      <a href="https://panel.fichaje.app" class="hidden md:inline-flex items-center gap-2 border border-white/20 px-5 py-2 text-[0.68rem] uppercase tracking-[0.42em] text-white hover:bg-white/10 transition">Acceder</a>
    </div>
  </header>

  <main class="relative overflow-hidden">
    <div class="noise-layer pointer-events-none" aria-hidden="true"></div>

    <section class="relative min-h-[92vh] lg:min-h-[100vh] overflow-hidden pt-40 pb-32">
      <div class="hero-gradient hero-gradient--one"></div>
      <div class="hero-gradient hero-gradient--two"></div>
      <div class="hero-gridlines"></div>

  <div class="max-w-7xl mx-auto px-6 grid lg:grid-cols-[1.05fr_0.95fr] gap-20 items-center relative z-[1]">
        <div class="space-y-12">
          <div class="hero-intro text-[0.68rem] uppercase tracking-[0.6em] text-white/60 flex items-center gap-3">
            <span class="inline-flex h-px w-16 bg-white/30"></span>
            Plataforma creativa de control horario
          </div>
          <h1 class="hero-title font-display text-4xl md:text-7xl font-black leading-[0.96] text-white">
            <span class="hero-title-line block overflow-hidden"><span class="block">Control horario auditable</span></span>
            <span class="hero-title-line block overflow-hidden"><span class="block text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent">para equipos que rompen la rutina</span></span>
            <span class="hero-title-line block overflow-hidden"><span class="block">y necesitan ritmo en tiempo real</span></span>
          </h1>
          <p class="hero-copy text-base md:text-xl text-white/70 max-w-2xl">
            fichaje.app automatiza fichajes, vacaciones, jornadas híbridas y reporting en vivo con una experiencia digna de premios. Conecta trabajo presencial y remoto sin fricción, dejando trazabilidad impecable.
          </p>
          <div class="flex flex-col sm:flex-row sm:items-center gap-4">
            <a href="#pricing" class="inline-flex items-center justify-center px-8 py-3 text-[0.7rem] font-semibold uppercase tracking-[0.32em] bg-white text-background hover:bg-white/90 transition">Ver planes</a>
            <button type="button" data-demo-trigger class="inline-flex items-center justify-center px-8 py-3 text-[0.7rem] font-semibold uppercase tracking-[0.32em] border border-white/30 text-white hover:bg-white/10 transition">Probar demo</button>
          </div>
          <div class="hero-meta grid sm:grid-cols-3 gap-6 pt-6">
            <div class="hero-meta-item border-l border-white/20 pl-5">
              <p class="text-xs uppercase tracking-[0.32em] text-white/40">Implementación</p>
              <p class="text-2xl font-semibold text-white">7 días</p>
            </div>
            <div class="hero-meta-item border-l border-white/20 pl-5">
              <p class="text-xs uppercase tracking-[0.32em] text-white/40">Usuarios activos</p>
              <p class="text-2xl font-semibold text-white">5K+</p>
            </div>
            <div class="hero-meta-item border-l border-white/20 pl-5">
              <p class="text-xs uppercase tracking-[0.32em] text-white/40">Satisfacción</p>
              <p class="text-2xl font-semibold text-white">94%</p>
            </div>
          </div>
        </div>
        <div class="relative" data-animate>
          <div class="hero-preview relative overflow-hidden border border-white/12 bg-white/[0.04] backdrop-blur-xl">
            <div class="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white/[0.18] via-transparent to-transparent opacity-70"></div>
            <div class="hero-preview__header flex items-start justify-between gap-6 px-6 pt-6">
              <div>
                <p class="text-xs uppercase tracking-[0.3em] text-white/50">Demo guiada</p>
                <p class="text-base font-semibold text-white/85">Onboarding listo en cuatro pasos</p>
              </div>
              <span class="hero-badge">30 días</span>
            </div>
            <div class="hero-preview__timeline grid gap-5 px-6 py-7">
              <div class="hero-timeline-item">
                <span class="hero-timeline-dot">1</span>
                <div>
                  <p class="text-sm font-semibold text-white/85">Envía el formulario</p>
                  <p class="text-xs text-white/55 mt-1">Validamos tus datos y preparamos tu entorno demo en panel.fichaje.app.</p>
                </div>
              </div>
              <div class="hero-timeline-item">
                <span class="hero-timeline-dot">2</span>
                <div>
                  <p class="text-sm font-semibold text-white/85">Credenciales al instante</p>
                  <p class="text-xs text-white/55 mt-1">Recibe un email con el enlace para definir tu contraseña inicial.</p>
                </div>
              </div>
              <div class="hero-timeline-item">
                <span class="hero-timeline-dot">3</span>
                <div>
                  <p class="text-sm font-semibold text-white/85">Panel con datos reales</p>
                  <p class="text-xs text-white/55 mt-1">Plantillas de horarios, equipos de ejemplo y reporting listo.</p>
                </div>
              </div>
              <div class="hero-timeline-item">
                <span class="hero-timeline-dot">4</span>
                <div>
                  <p class="text-sm font-semibold text-white/85">Automatiza en 30 días</p>
                  <p class="text-xs text-white/55 mt-1">Ampliable a plan de pago sin perder configuraciones.</p>
                </div>
              </div>
            </div>
            <div class="hero-preview__details px-6 pb-6 text-sm text-white/65">
              <p class="text-xs uppercase tracking-[0.28em] text-white/40">Sin tarjeta • Usuarios ilimitados • Datos borrados al expirar</p>
            </div>
            <div class="hero-preview__footer flex items-center justify-between gap-6 border-t border-white/10 px-6 py-6">
              <div>
                <p class="text-xs uppercase tracking-[0.32em] text-white/45">Expiración automática</p>
                <p class="text-sm text-white/65 mt-1">Te avisamos 5 días antes por email si quieres seguir.</p>
              </div>
              <button type="button" data-demo-trigger class="hero-secondary-cta text-xs uppercase tracking-[0.32em] text-white/70 hover:text-white transition">Solicitar demo</button>
            </div>
          </div>
          <div class="hero-accent hero-accent--one"></div>
          <div class="hero-accent hero-accent--two"></div>
        </div>
      </div>

      <div class="absolute bottom-10 left-1/2 -translate-x-1/2 text-center text-xs uppercase tracking-[0.28em] text-white/40 flex flex-col items-center gap-3">
        <span class="inline-flex h-12 w-px bg-white/20"></span>
        Scroll
      </div>
    </section>

    <section class="marquee relative py-10 border-y border-white/10">
      <div class="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background pointer-events-none"></div>
      <div class="marquee-track text-sm uppercase tracking-[0.48em] text-white/40">
        <span>CONTROL HORARIO</span>
        <span>VACACIONES INTELIGENTES</span>
        <span>DEPARTAMENTOS AUTÓNOMOS</span>
        <span>ANALÍTICA EN VIVO</span>
        <span>API ABIERTA</span>
        <span>CONTROL HORARIO</span>
        <span>VACACIONES INTELIGENTES</span>
        <span>DEPARTAMENTOS AUTÓNOMOS</span>
        <span>ANALÍTICA EN VIVO</span>
        <span>API ABIERTA</span>
      </div>
    </section>

    <section id="features" class="relative py-28">
      <div class="section-blur section-blur--one"></div>
      <div class="section-blur section-blur--two"></div>
      <div class="max-w-7xl mx-auto px-6 grid xl:grid-cols-[1.05fr_0.95fr] gap-20">
        <div class="space-y-12" data-animate>
          <div class="space-y-5">
            <p class="text-[0.68rem] uppercase tracking-[0.6em] text-white/45">Suite modular</p>
            <h2 class="section-title font-display text-3xl md:text-5xl font-bold leading-[1.05] text-white">Un sistema operativo de personas</h2>
            <p class="text-base md:text-lg text-white/65 max-w-xl">Activa módulos en minutos: fichajes inteligentes, vacaciones conscientes, workflows departamentales y reporting en vivo sin fricciones.</p>
          </div>
          <div class="feature-rail">
            <article class="feature-chip" data-clip>
              <div class="feature-index">01</div>
              <div>
                <h3 class="text-lg font-semibold text-white/90">Fichaje omnicanal</h3>
                <p class="text-sm text-white/60 mt-2">Web, móvil, kiosko o QR con control de IP, geolocalización y detección automática de teletrabajo.</p>
              </div>
              <span class="feature-tag">Automatiza pausas</span>
            </article>
            <article class="feature-chip" data-clip>
              <div class="feature-index">02</div>
              <div>
                <h3 class="text-lg font-semibold text-white/90">Vacaciones conscientes</h3>
                <p class="text-sm text-white/60 mt-2">Reglas avanzadas, bolsas por convenio, caducidades configurables y aprobaciones con contexto completo.</p>
              </div>
              <span class="feature-tag">Evita solapamientos</span>
            </article>
            <article class="feature-chip" data-clip>
              <div class="feature-index">03</div>
              <div>
                <h3 class="text-lg font-semibold text-white/90">Departamentos autónomos</h3>
                <p class="text-sm text-white/60 mt-2">Supervisores con panel propio, filtros por área y flujos de validación localizados con trazabilidad total.</p>
              </div>
              <span class="feature-tag">Auditoría granular</span>
            </article>
            <article class="feature-chip" data-clip>
              <div class="feature-index">04</div>
              <div>
                <h3 class="text-lg font-semibold text-white/90">Reporting vivo</h3>
                <p class="text-sm text-white/60 mt-2">Dashboards real-time, exportaciones PDF/CSV técnicas, API REST y webhooks listos para conectar tu stack.</p>
              </div>
              <span class="feature-tag">Integraciones listas</span>
            </article>
          </div>
          <div class="grid md:grid-cols-2 gap-6 text-sm text-white/70">
            <div class="border border-white/12 p-6" data-animate>
              <p class="text-xs uppercase tracking-[0.28em] text-white/40">Onboarding express</p>
              <p class="mt-3 text-base text-white/85">Sube plantillas, invita usuarios y crea departamentos en menos de 10 minutos.</p>
            </div>
            <div class="border border-white/12 p-6" data-animate>
              <p class="text-xs uppercase tracking-[0.28em] text-white/40">Jornadas flexibles</p>
              <p class="mt-3 text-base text-white/85">Configura jornadas intensivas, reglas de teletrabajo y objetivos por persona.</p>
            </div>
          </div>
        </div>

        <div class="space-y-10" data-animate>
          <div class="glass-slab">
            <div class="glass-slab__header">
              <p class="text-xs uppercase tracking-[0.3em] text-white/45">Analítica semanal</p>
              <p class="text-sm text-white/65">Comparativa objetivo vs horas reales</p>
            </div>
            <div class="aspect-[16/10] w-full bg-background border-t border-white/8">
              <canvas id="chart" class="h-full w-full"></canvas>
            </div>
            <div class="glass-slab__footer grid sm:grid-cols-3 gap-6">
              <div>
                <p class="text-xs uppercase tracking-[0.3em] text-white/45">Horas reales</p>
                <p class="text-2xl font-semibold text-white">39,2h</p>
              </div>
              <div>
                <p class="text-xs uppercase tracking-[0.3em] text-white/45">Deuda</p>
                <p class="text-2xl font-semibold text-accent/80">-2,8h</p>
              </div>
              <div>
                <p class="text-xs uppercase tracking-[0.3em] text-white/45">Teletrabajo</p>
                <p class="text-2xl font-semibold text-sky-200">2 días</p>
              </div>
            </div>
          </div>
          <div class="grid md:grid-cols-2 gap-6 text-sm text-white/70">
            <div class="border-l border-white/15 pl-6" data-animate>
              <p class="text-xs uppercase tracking-[0.28em] text-white/45">Automatizaciones</p>
              <p class="mt-3 text-base text-white/85">Recordatorios, validaciones y alertas por IP no autorizada sin intervención manual.</p>
            </div>
            <div class="border-l border-white/15 pl-6" data-animate>
              <p class="text-xs uppercase tracking-[0.28em] text-white/45">Integraciones</p>
              <p class="mt-3 text-base text-white/85">API REST y webhooks para conectar ERPs, gestorías o tu BI corporativo.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="benefits" class="relative py-24" data-animate>
      <div class="max-w-7xl mx-auto px-6">
        <div class="flex flex-col gap-12 lg:flex-row lg:items-end lg:justify-between">
          <div class="max-w-lg">
            <p class="text-[0.68rem] uppercase tracking-[0.6em] text-white/45">Impacto inmediato</p>
            <h2 class="font-display text-3xl md:text-5xl font-bold text-white leading-[1.05]">Menos fricción operativa, más tiempo para las personas</h2>
          </div>
          <p class="text-base md:text-lg text-white/65 max-w-2xl">Centraliza aprobaciones y métricas, reduce tiempos muertos y asegura cumplimiento legal con un diseño que el equipo quiere usar a diario.</p>
        </div>
        <div class="mt-16 grid md:grid-cols-3 gap-px bg-white/10">
          <article class="bg-background px-8 py-10">
            <p class="text-4xl font-bold text-white">-62%</p>
            <p class="text-sm text-white/60 mt-3">Tiempo menos gestionando incidencias gracias a workflows guiados y automáticos.</p>
          </article>
          <article class="bg-background px-8 py-10">
            <p class="text-4xl font-bold text-white">3,5h</p>
            <p class="text-sm text-white/60 mt-3">Ahorro semanal medio por responsable al consolidar vacaciones y horarios.</p>
          </article>
          <article class="bg-background px-8 py-10">
            <p class="text-4xl font-bold text-white">100%</p>
            <p class="text-sm text-white/60 mt-3">Trazabilidad auditable de cambios: inspecciones laborales, ISO y auditorías sin estrés.</p>
          </article>
        </div>
      </div>
    </section>

    <section class="relative py-24 border-y border-white/10" data-animate>
      <div class="max-w-7xl mx-auto px-6 grid lg:grid-cols-[0.7fr_1.3fr] gap-16 items-start">
        <div class="space-y-4">
          <p class="text-[0.68rem] uppercase tracking-[0.6em] text-white/45">Workflows core</p>
          <h3 class="font-display text-2xl md:text-4xl font-semibold text-white leading-tight">Un flujo continuo desde el fichaje hasta la analítica</h3>
          <p class="text-base text-white/65">Visualiza cómo se conecta todo en fichaje.app para equipos híbridos, multi-sede o en crecimiento.</p>
        </div>
        <div class="grid gap-8">
          <div class="workflow-step">
            <div class="workflow-node">A</div>
            <div>
              <p class="text-sm uppercase tracking-[0.28em] text-white/45">Fichaje</p>
              <p class="text-lg font-semibold text-white/85">Registro instantáneo con validación</p>
              <p class="text-sm text-white/55 mt-2">Detectamos IP, GPS, teletrabajo y duración real de la jornada en tiempo real.</p>
            </div>
          </div>
          <div class="workflow-step">
            <div class="workflow-node">B</div>
            <div>
              <p class="text-sm uppercase tracking-[0.28em] text-white/45">Flujo de aprobación</p>
              <p class="text-lg font-semibold text-white/85">Supervisores con contexto</p>
              <p class="text-sm text-white/55 mt-2">Gestionan incidencias, vacaciones y cambios de horario con histórico y evidencias.</p>
            </div>
          </div>
          <div class="workflow-step">
            <div class="workflow-node">C</div>
            <div>
              <p class="text-sm uppercase tracking-[0.28em] text-white/45">Analítica</p>
              <p class="text-lg font-semibold text-white/85">Paneles y reportes listos</p>
              <p class="text-sm text-white/55 mt-2">Informes técnicos, widgets por rol y exportaciones que alimentan tu BI.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="pricing" class="relative py-28" data-animate>
      <div class="max-w-7xl mx-auto px-6">
        <div class="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p class="text-[0.68rem] uppercase tracking-[0.6em] text-white/45">Pricing honesto</p>
            <h2 class="font-display text-3xl md:text-5xl font-bold text-white leading-[1.05]">Solo pagas por el valor que despliegas</h2>
          </div>
          <p class="text-base md:text-lg text-white/65 max-w-2xl">Elige cómo quieres operar fichaje.app: alojado por nosotros, multiempresa o integrado en tu infraestructura.</p>
        </div>

        <div class="mt-16 grid md:grid-cols-3 gap-6">
          <article class="pricing-card border border-white/12 bg-white/[0.02] p-8 flex flex-col gap-6" data-clip>
            <div class="uppercase text-xs tracking-[0.28em] text-white/45">Licencia Única</div>
            <p class="text-sm text-white/60">Para una sola empresa</p>
            <div class="text-5xl font-bold text-white">1€<span class="text-base text-white/50">/usuario</span></div>
            <p class="text-sm text-white/55">+ 99€/mes si usas dominio o subdominio y correos corporativos propios.</p>
            <ul class="text-sm text-white/55 space-y-2">
              <li>• Alojamiento incluido</li>
              <li>• MongoDB cloud incluida</li>
              <li>• Acceso al panel y API</li>
            </ul>
            <a href="#contact" data-plan="unica" class="plan-cta inline-flex items-center justify-center px-6 py-3 text-xs uppercase tracking-[0.28em] border border-white/20 hover:bg-white/10 transition">Contactar</a>
          </article>
          <article class="pricing-card border border-primary/40 bg-primary/10 p-8 flex flex-col gap-6" data-clip>
            <div class="uppercase text-xs tracking-[0.28em] text-white/60">Licencia Agencia</div>
            <p class="text-sm text-white/75">Para asesorías o múltiples sociedades</p>
            <div class="text-5xl font-bold text-white">399€<span class="text-base text-white/60">/mes</span></div>
            <p class="text-sm text-white/65">Incluye dominio propio. Máximo 50 empresas por panel.</p>
            <ul class="text-sm text-white/65 space-y-2">
              <li>• Alojamiento incluido</li>
              <li>• MongoDB cloud incluida</li>
              <li>• Panel multiempresa</li>
            </ul>
            <a href="#contact" data-plan="agencia" class="plan-cta inline-flex items-center justify-center px-6 py-3 text-xs uppercase tracking-[0.28em] bg-white text-background hover:bg-white/90 transition">Quiero esta</a>
          </article>
          <article class="pricing-card border border-white/12 bg-white/[0.02] p-8 flex flex-col gap-6" data-clip>
            <div class="uppercase text-xs tracking-[0.28em] text-white/45">Licencia Software</div>
            <p class="text-sm text-white/60">Integra en tu infraestructura</p>
            <div class="text-5xl font-bold text-white">7.999€</div>
            <p class="text-sm text-white/55">Acceso al repositorio, hosting y MongoDB a tu cargo.</p>
            <ul class="text-sm text-white/55 space-y-2">
              <li>• Actualizaciones de por vida</li>
              <li>• Instalación incluida</li>
              <li>• Soporte prioritario 12 meses</li>
            </ul>
            <a href="#contact" data-plan="software" class="plan-cta inline-flex items-center justify-center px-6 py-3 text-xs uppercase tracking-[0.28em] border border-white/20 hover:bg-white/10 transition">Hablar con ventas</a>
          </article>
        </div>
      </div>
    </section>

    <section id="faq" class="relative py-28" data-animate>
      <div class="max-w-4xl mx-auto px-6">
        <div class="text-center space-y-4">
          <p class="text-[0.68rem] uppercase tracking-[0.6em] text-white/45">FAQ</p>
          <h2 class="font-display text-3xl md:text-5xl font-bold text-white">Resolvemos tus dudas clave</h2>
        </div>
        <div class="mt-16 divide-y divide-white/10 border-y border-white/10">
          <article class="faq-item">
            <button class="faq-trigger w-full flex items-center justify-between gap-4 py-5 text-left" data-faq-target="faq-1" aria-expanded="false">
              <span class="text-base font-semibold text-white">¿Cómo se realiza el fichaje?</span>
              <span class="faq-icon inline-flex h-9 w-9 items-center justify-center border border-white/20 text-sm text-white/60 transition-transform duration-200">+</span>
            </button>
            <div id="faq-1" class="faq-panel hidden pb-6 text-sm text-white/60">
              <p>Puedes fichar desde web, móvil o kiosko con validación de IP, geolocalización y teletrabajo detectado al instante. Las horas netas se calculan descontando las pausas declaradas.</p>
            </div>
          </article>

          <article class="faq-item">
            <button class="faq-trigger w-full flex items-center justify-between gap-4 py-5 text-left" data-faq-target="faq-2" aria-expanded="false">
              <span class="text-base font-semibold text-white">¿Qué ocurre si olvido fichar una pausa o llego tarde?</span>
              <span class="faq-icon inline-flex h-9 w-9 items-center justify-center border border-white/20 text-sm text-white/60 transition-transform duration-200">+</span>
            </button>
            <div id="faq-2" class="faq-panel hidden pb-6 text-sm text-white/60">
              <p>Dispones de incidencias y solicitudes de edición. Envías la corrección con notas o adjuntos y un supervisor la valida antes de actualizar el registro.</p>
            </div>
          </article>

          <article class="faq-item">
            <button class="faq-trigger w-full flex items-center justify-between gap-4 py-5 text-left" data-faq-target="faq-3" aria-expanded="false">
              <span class="text-base font-semibold text-white">¿Cómo gestiono vacaciones, bolsas y días libres?</span>
              <span class="faq-icon inline-flex h-9 w-9 items-center justify-center border border-white/20 text-sm text-white/60 transition-transform duration-200">+</span>
            </button>
            <div id="faq-3" class="faq-panel hidden pb-6 text-sm text-white/60">
              <p>Controlamos días anuales, bolsas de horas o días libres y traspasos entre ejercicios. Las solicitudes verifican saldo, fechas límite y reglas antes de pasar a aprobación.</p>
            </div>
          </article>

          <article class="faq-item">
            <button class="faq-trigger w-full flex items-center justify-between gap-4 py-5 text-left" data-faq-target="faq-4" aria-expanded="false">
              <span class="text-base font-semibold text-white">¿Se pueden definir horarios y jornadas intensivas?</span>
              <span class="faq-icon inline-flex h-9 w-9 items-center justify-center border border-white/20 text-sm text-white/60 transition-transform duration-200">+</span>
            </button>
            <div id="faq-4" class="faq-panel hidden pb-6 text-sm text-white/60">
              <p>Configura horarios corporativos, plantillas por sede, jornadas intensivas con vigencias y reglas de horas objetivo que alimentan los informes de deuda.</p>
            </div>
          </article>

          <article class="faq-item">
            <button class="faq-trigger w-full flex items-center justify-between gap-4 py-5 text-left" data-faq-target="faq-5" aria-expanded="false">
              <span class="text-base font-semibold text-white">¿Cómo se organizan departamentos y supervisores?</span>
              <span class="faq-icon inline-flex h-9 w-9 items-center justify-center border border-white/20 text-sm text-white/60 transition-transform duration-200">+</span>
            </button>
            <div id="faq-5" class="faq-panel hidden pb-6 text-sm text-white/60">
              <p>Estructuramos tu organización por departamentos con supervisores responsables. Cada supervisor gestiona su equipo, aprueba incidencias y recibe alertas.</p>
            </div>
          </article>

          <article class="faq-item">
            <button class="faq-trigger w-full flex items-center justify-between gap-4 py-5 text-left" data-faq-target="faq-6" aria-expanded="false">
              <span class="text-base font-semibold text-white">¿Qué roles existen y qué permisos tienen?</span>
              <span class="faq-icon inline-flex h-9 w-9 items-center justify-center border border-white/20 text-sm text-white/60 transition-transform duration-200">+</span>
            </button>
            <div id="faq-6" class="faq-panel hidden pb-6 text-sm text-white/60">
              <p>Usuario, supervisor y administrador. Cada rol dispone de vistas, permisos y métricas adaptadas, con changelog completo de cada acción.</p>
            </div>
          </article>

          <article class="faq-item">
            <button class="faq-trigger w-full flex items-center justify-between gap-4 py-5 text-left" data-faq-target="faq-7" aria-expanded="false">
              <span class="text-base font-semibold text-white">¿Cómo funciona el teletrabajo?</span>
              <span class="faq-icon inline-flex h-9 w-9 items-center justify-center border border-white/20 text-sm text-white/60 transition-transform duration-200">+</span>
            </button>
            <div id="faq-7" class="faq-panel hidden pb-6 text-sm text-white/60">
              <p>Los usuarios solicitan días remotos dentro de los cupos permitidos. Supervisores o RRHH aprueban y la planificación sincroniza fichajes, informes y controles.</p>
            </div>
          </article>

          <article class="faq-item">
            <button class="faq-trigger w-full flex items-center justify-between gap-4 py-5 text-left" data-faq-target="faq-8" aria-expanded="false">
              <span class="text-base font-semibold text-white">¿Qué informes y auditoría ofrece?</span>
              <span class="faq-icon inline-flex h-9 w-9 items-center justify-center border border-white/20 text-sm text-white/60 transition-transform duration-200">+</span>
            </button>
            <div id="faq-8" class="faq-panel hidden pb-6 text-sm text-white/60">
              <p>Dashboards por rol, informes detallados en CSV y PDF técnico, log de cambios, control de IPs y trazabilidad completa de aprobaciones y modificaciones.</p>
            </div>
          </article>
        </div>
      </div>
    </section>

    <section id="contact" class="relative py-28" data-animate>
      <div class="max-w-3xl mx-auto px-6">
        <div class="border border-white/12 bg-white/[0.03] px-8 py-10 backdrop-blur-xl">
          <div class="space-y-4 mb-10">
            <p class="text-[0.68rem] uppercase tracking-[0.6em] text-white/45">Contacto</p>
            <h2 class="font-display text-3xl md:text-5xl font-semibold text-white leading-tight">Cuéntanos cómo quieres revolucionar tu control horario</h2>
            <p class="text-base text-white/65 max-w-2xl">Respondemos en menos de 24h y configuramos una demo adaptada a tu estructura.</p>
          </div>
          <form class="grid gap-4" id="contactForm">
            <input type="text" name="name" placeholder="Nombre" required class="px-5 py-4 border border-white/15 bg-transparent uppercase text-xs tracking-[0.28em] text-white placeholder:text-white/30 focus:outline-none focus:border-white/40 transition" />
            <input type="email" name="email" placeholder="Email" required class="px-5 py-4 border border-white/15 bg-transparent uppercase text-xs tracking-[0.28em] text-white placeholder:text-white/30 focus:outline-none focus:border-white/40 transition" />
            <select name="plan" required class="px-5 py-4 border border-white/15 bg-transparent uppercase text-xs tracking-[0.28em] text-white focus:outline-none focus:border-white/40 transition">
              <option value="">Selecciona el plan deseado</option>
              <option value="unica">Licencia Única</option>
              <option value="agencia">Licencia Agencia</option>
              <option value="software">Licencia de uso del software</option>
            </select>
            <div id="selectedPlanBadge" class="hidden items-center justify-between gap-3 border border-primary/30 bg-primary/10 px-5 py-3 text-xs uppercase tracking-[0.28em] text-primary/80">
              <span>Plan seleccionado</span>
              <span id="selectedPlanLabel" class="font-semibold text-primary">—</span>
            </div>
            <textarea name="message" placeholder="Cuéntanos qué necesitas" rows="5" required class="px-5 py-4 border border-white/15 bg-transparent text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-white/40 transition"></textarea>
            <button type="submit" class="inline-flex items-center justify-center px-8 py-4 text-xs uppercase tracking-[0.32em] bg-white text-background hover:bg-white/90 transition">Enviar</button>
            <p id="contactMsg" class="text-xs uppercase tracking-[0.24em] text-white/50"></p>
          </form>
        </div>
      </div>
    </section>

    <div id="demo-modal" class="demo-modal" aria-hidden="true">
      <div class="demo-modal__overlay" data-demo-close></div>
      <div class="demo-modal__panel">
        <div class="demo-modal__header">
          <div class="space-y-2">
            <span class="demo-badge">Demo express</span>
            <h3 class="demo-title">Activa fichaje.app en menos de 2 minutos</h3>
            <p class="demo-subtitle">Crea un entorno ilimitado durante 30 días. Sin tarjeta, sin compromisos, con expiración automática.</p>
          </div>
          <button type="button" class="demo-modal__close" aria-label="Cerrar solicitud de demo" data-demo-close>×</button>
        </div>
        <form id="demo-form" class="demo-form">
          <div class="demo-form__grid">
            <label class="demo-field">
              <span>Nombre de la empresa</span>
              <input name="companyName" type="text" required placeholder="Ej. Dropixel Studio" autocomplete="organization" />
            </label>
            <label class="demo-field">
              <span>NIF / CIF</span>
              <input name="companyTaxId" type="text" required placeholder="B12345678" autocomplete="off" />
            </label>
            <label class="demo-field">
              <span>Email corporativo</span>
              <input name="companyEmail" type="email" required placeholder="contacto@empresa.com" autocomplete="email" />
            </label>
            <label class="demo-field">
              <span>Teléfono</span>
              <input name="companyPhone" type="tel" required placeholder="+34 600 123 456" autocomplete="tel" />
            </label>
            <label class="demo-field demo-field--full">
              <span>Dirección fiscal</span>
              <input name="companyAddress" type="text" required placeholder="Calle, número, ciudad" autocomplete="street-address" />
            </label>
            <label class="demo-field">
              <span>Nombre responsable</span>
              <input name="adminFirstName" type="text" required placeholder="Nombre" autocomplete="given-name" />
            </label>
            <label class="demo-field">
              <span>Apellidos responsable</span>
              <input name="adminLastName" type="text" required placeholder="Apellidos" autocomplete="family-name" />
            </label>
            <label class="demo-field">
              <span>Email del responsable</span>
              <input name="adminEmail" type="email" required placeholder="rrhh@empresa.com" autocomplete="email" />
            </label>
            <label class="demo-field demo-field--full">
              <span>Notas (opcional)</span>
              <textarea name="notes" rows="3" placeholder="Volumen de empleados, necesidades especiales o fechas de implantación"></textarea>
            </label>
          </div>
          <div class="demo-captcha">
            <div class="g-recaptcha" data-sitekey="${RECAPTCHA_SITE_KEY}" data-theme="dark"></div>
          </div>
          <p class="demo-hint">Al enviar generamos una empresa demo válida durante 30 días. Te enviaremos el acceso y un recordatorio antes de la desactivación automática.</p>
          <div class="demo-alert demo-alert--success" id="demo-success" role="status" aria-live="polite"></div>
          <div class="demo-alert demo-alert--error" id="demo-error" role="alert" aria-live="assertive"></div>
          <button type="submit" id="demo-submit" class="demo-submit">Crear demo</button>
        </form>
      </div>
    </div>
  </main>

  <footer class="border-t border-white/10 py-8 text-center text-xs uppercase tracking-[0.32em] text-white/40">
    Desarrollado por Alejandro Lamas — © <span id="year"></span>
  </footer>
`

// Tailwind styles
const style = document.createElement('style')
style.innerHTML = `@tailwind base;@tailwind components;@tailwind utilities;`
document.head.appendChild(style)

// Extra CSS
const extra = document.createElement('style')
extra.innerHTML = `
  body {
    background-color: #050510;
    color: rgba(245, 245, 255, 0.95);
    font-family: 'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  }
  .noise-layer {
    position: fixed;
    inset: 0;
    pointer-events: none;
    background-image: radial-gradient(rgba(255, 255, 255, 0.12) 0.6px, transparent 0.6px);
    background-size: 3px 3px;
    opacity: 0.05;
    mix-blend-mode: screen;
    z-index: 5;
  }
  .hero-gradient {
    position: absolute;
    border-radius: 999px;
    filter: blur(120px);
    opacity: 0.65;
    animation: heroFloat 16s ease-in-out infinite;
    transform: translate3d(0, 0, 0);
    pointer-events: none;
    z-index: 0;
  }
  .hero-gradient--one {
    top: -22%;
    left: -12%;
    width: 60vw;
    height: 60vw;
    background: radial-gradient(circle, rgba(139, 92, 246, 0.45), transparent 60%);
  }
  .hero-gradient--two {
    bottom: -28%;
    right: -8%;
    width: 52vw;
    height: 52vw;
    background: radial-gradient(circle, rgba(16, 185, 129, 0.35), transparent 65%);
    animation-delay: 2.5s;
  }
  .hero-gridlines {
    position: absolute;
    inset: 0;
    background-image: linear-gradient(rgba(255, 255, 255, 0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.04) 1px, transparent 1px);
    background-size: 140px 140px;
    opacity: 0.35;
    mix-blend-mode: soft-light;
    animation: gridShift 22s linear infinite;
    pointer-events: none;
    z-index: 0;
  }
  @keyframes gridShift {
    0% {
      transform: translate3d(0, 0, 0);
    }
    100% {
      transform: translate3d(-70px, -70px, 0);
    }
  }
  @keyframes heroFloat {
    0%,
    100% {
      transform: translate3d(0, 0, 0) scale(1);
    }
    50% {
      transform: translate3d(0, -3%, 0) scale(1.04);
    }
  }
  .hero-preview {
    border-radius: 26px;
    overflow: hidden;
    position: relative;
  }
  .hero-preview__header,
  .hero-preview__timeline,
  .hero-preview__details,
  .hero-preview__footer {
    position: relative;
    z-index: 1;
  }
  .hero-badge {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0.4rem 0.9rem;
    border-radius: 999px;
    font-size: 0.62rem;
    letter-spacing: 0.3em;
    text-transform: uppercase;
    background: rgba(139, 92, 246, 0.18);
    color: rgba(255, 255, 255, 0.75);
    border: 1px solid rgba(139, 92, 246, 0.4);
    box-shadow: 0 10px 30px rgba(139, 92, 246, 0.25);
  }
  .hero-preview__timeline {
    background: rgba(7, 7, 20, 0.6);
  }
  .hero-timeline-item {
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 1.3rem;
    align-items: start;
  }
  .hero-timeline-dot {
    width: 2.1rem;
    height: 2.1rem;
    border-radius: 999px;
    border: 1px solid rgba(255, 255, 255, 0.2);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.8rem;
    letter-spacing: 0.28em;
    text-transform: uppercase;
    color: rgba(255, 255, 255, 0.72);
    background: rgba(5, 5, 20, 0.6);
  }
  .hero-preview__details {
    background: rgba(9, 9, 24, 0.55);
  }
  .hero-preview__footer {
    background: linear-gradient(90deg, rgba(10, 10, 30, 0.6) 0%, rgba(18, 18, 36, 0.5) 100%);
  }
  .hero-secondary-cta {
    border: 1px solid rgba(255, 255, 255, 0.18);
    padding: 0.95rem 1.6rem;
    border-radius: 999px;
    background: rgba(10, 10, 26, 0.42);
  }
  .hero-secondary-cta:hover {
    background: rgba(18, 18, 34, 0.65);
  }
  .hero-accent {
    position: absolute;
    border-radius: 999px;
    filter: blur(100px);
    opacity: 0.55;
    pointer-events: none;
  }
  .hero-accent--one {
    width: 240px;
    height: 240px;
    right: -110px;
    bottom: -40px;
    background: radial-gradient(circle, rgba(16, 185, 129, 0.35), transparent 70%);
  }
  .hero-accent--two {
    width: 300px;
    height: 300px;
    right: -40px;
    top: -70px;
    background: radial-gradient(circle, rgba(139, 92, 246, 0.35), transparent 70%);
  }
  .marquee {
    overflow: hidden;
  }
  .marquee-track {
    display: flex;
    gap: 6rem;
    align-items: center;
    width: max-content;
    animation: marquee 30s linear infinite;
  }
  .marquee-track span {
    white-space: nowrap;
  }
  @keyframes marquee {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(-50%);
    }
  }
  .section-blur {
    position: absolute;
    border-radius: 50%;
    filter: blur(120px);
    opacity: 0.5;
    pointer-events: none;
  }
  .section-blur--one {
    top: -18%;
    left: 8%;
    width: 320px;
    height: 320px;
    background: radial-gradient(circle, rgba(45, 212, 191, 0.25), transparent 70%);
  }
  .section-blur--two {
    bottom: -28%;
    right: 5%;
    width: 360px;
    height: 360px;
    background: radial-gradient(circle, rgba(139, 92, 246, 0.25), transparent 70%);
  }
  .feature-rail {
    display: grid;
    gap: 1.5rem;
  }
  .feature-chip {
    display: grid;
    grid-template-columns: auto 1fr auto;
    gap: 1.5rem;
    align-items: start;
    padding: 1.75rem 1.5rem;
    border: 1px solid rgba(255, 255, 255, 0.12);
    background-color: rgba(10, 10, 22, 0.7);
    transition: background-color 0.4s ease, border-color 0.4s ease;
  }
  .feature-chip:hover {
    background-color: rgba(18, 18, 32, 0.9);
    border-color: rgba(255, 255, 255, 0.2);
  }
  .feature-index {
    font-size: 0.82rem;
    letter-spacing: 0.5em;
    color: rgba(255, 255, 255, 0.35);
  }
  .feature-tag {
    font-size: 0.62rem;
    letter-spacing: 0.28em;
    text-transform: uppercase;
    color: rgba(255, 255, 255, 0.5);
    align-self: center;
  }
  .glass-slab {
    border: 1px solid rgba(255, 255, 255, 0.12);
    border-radius: 26px;
    background: linear-gradient(180deg, rgba(255, 255, 255, 0.05) 0%, rgba(10, 10, 22, 0.92) 100%);
    backdrop-filter: blur(36px);
    padding: 2.25rem;
  }
  .glass-slab__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 1.5rem;
  }
  .glass-slab__footer {
    padding-top: 1.75rem;
    border-top: 1px solid rgba(255, 255, 255, 0.08);
  }
  .workflow-step {
    display: flex;
    gap: 1.5rem;
    border-left: 1px solid rgba(255, 255, 255, 0.12);
    padding-left: 1.75rem;
  }
  .workflow-node {
    width: 2.5rem;
    height: 2.5rem;
    border: 1px solid rgba(255, 255, 255, 0.2);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.86rem;
    letter-spacing: 0.4em;
    text-transform: uppercase;
    color: rgba(255, 255, 255, 0.6);
  }
  .pricing-card {
    position: relative;
    border-radius: 26px;
    overflow: hidden;
  }
  .pricing-card::after {
    content: '';
    position: absolute;
    inset: 0;
    border: 1px solid rgba(255, 255, 255, 0.06);
    pointer-events: none;
    mix-blend-mode: soft-light;
  }
  .faq-item {
    padding: 0;
  }
  .faq-trigger {
    font-size: 1rem;
    letter-spacing: 0.02em;
  }
  .faq-icon {
    border-radius: 999px;
  }
  #contactForm input,
  #contactForm select,
  #contactForm textarea {
    border-radius: 0;
  }
  .demo-modal {
    position: fixed;
    inset: 0;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    padding: 3rem 1.5rem;
    background: rgba(5, 5, 16, 0.82);
    backdrop-filter: blur(12px);
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.28s ease;
    z-index: 200;
    overflow-y: auto;
    min-height: 100vh;
  }
  .demo-modal--open {
    opacity: 1;
    pointer-events: auto;
  }
  body.modal-open {
    overflow: hidden;
  }
  .demo-modal__overlay {
    position: absolute;
    inset: 0;
  }
  .demo-modal__panel {
    position: relative;
    width: min(680px, 100%);
    border: 1px solid rgba(255, 255, 255, 0.12);
    border-radius: 26px;
    background: linear-gradient(180deg, rgba(255, 255, 255, 0.07) 0%, rgba(8, 8, 24, 0.94) 100%);
    padding: 2.5rem;
    z-index: 1;
    box-shadow: 0 42px 60px rgba(10, 10, 30, 0.55);
    margin: 3rem auto;
    max-height: calc(100vh - 6rem);
    overflow-y: auto;
  }
  .demo-modal__header {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 1.5rem;
    margin-bottom: 2rem;
  }
  .demo-badge {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0.35rem 0.9rem;
    border-radius: 999px;
    border: 1px solid rgba(16, 185, 129, 0.35);
    background: rgba(16, 185, 129, 0.12);
    font-size: 0.62rem;
    letter-spacing: 0.32em;
    text-transform: uppercase;
    color: rgba(255, 255, 255, 0.7);
  }
  .demo-title {
    font-size: clamp(1.5rem, 2vw, 2rem);
    font-weight: 600;
    color: rgba(255, 255, 255, 0.95);
  }
  .demo-subtitle {
    font-size: 0.95rem;
    color: rgba(255, 255, 255, 0.62);
    max-width: 32rem;
  }
  .demo-modal__close {
    border: 1px solid rgba(255, 255, 255, 0.22);
    border-radius: 999px;
    width: 2.5rem;
    height: 2.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.4rem;
    color: rgba(255, 255, 255, 0.7);
    background: rgba(10, 10, 26, 0.4);
    transition: background 0.2s ease, color 0.2s ease;
  }
  .demo-modal__close:hover {
    background: rgba(16, 16, 32, 0.7);
    color: rgba(255, 255, 255, 0.9);
  }
  .demo-form {
    display: grid;
    gap: 1.4rem;
  }
  .demo-form__grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 1.3rem 1.2rem;
  }
  .demo-captcha {
    display: flex;
    justify-content: center;
    padding: 0.5rem 0 1.2rem;
  }
  .demo-field {
    display: grid;
    gap: 0.6rem;
    font-size: 0.72rem;
    letter-spacing: 0.32em;
    text-transform: uppercase;
    color: rgba(255, 255, 255, 0.5);
  }
  .demo-field--full {
    grid-column: 1 / -1;
  }
  .demo-field input,
  .demo-field textarea {
    width: 100%;
    padding: 1rem 1.1rem;
    border: 1px solid rgba(255, 255, 255, 0.12);
    background: rgba(5, 5, 18, 0.55);
    color: rgba(255, 255, 255, 0.9);
    font-size: 0.95rem;
    transition: border 0.2s ease, background 0.2s ease;
    border-radius: 12px;
  }
  .demo-field textarea {
    resize: vertical;
    min-height: 110px;
  }
  .demo-field input:focus,
  .demo-field textarea:focus {
    outline: none;
    border-color: rgba(139, 92, 246, 0.6);
    background: rgba(10, 10, 30, 0.7);
  }
  .demo-hint {
    font-size: 0.78rem;
    color: rgba(255, 255, 255, 0.52);
    line-height: 1.6;
  }
  .demo-alert {
    display: none;
    padding: 0.9rem 1.1rem;
    font-size: 0.78rem;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    border-radius: 12px;
  }
  .demo-alert--success {
    background: rgba(16, 185, 129, 0.12);
    border: 1px solid rgba(16, 185, 129, 0.35);
    color: rgba(209, 250, 229, 0.9);
  }
  .demo-alert--error {
    background: rgba(248, 113, 113, 0.12);
    border: 1px solid rgba(248, 113, 113, 0.35);
    color: rgba(254, 226, 226, 0.85);
  }
  .demo-submit {
    justify-self: flex-end;
    padding: 0.95rem 2.8rem;
    font-size: 0.7rem;
    letter-spacing: 0.32em;
    text-transform: uppercase;
    border-radius: 999px;
    border: 1px solid rgba(255, 255, 255, 0.18);
    background: linear-gradient(90deg, rgba(139, 92, 246, 0.82), rgba(16, 185, 129, 0.72));
    color: rgba(5, 5, 10, 0.96);
    font-weight: 600;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
  }
  .demo-submit:hover {
    transform: translateY(-2px);
    box-shadow: 0 12px 28px rgba(139, 92, 246, 0.35);
  }
  .demo-submit:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }
  @media (min-width: 768px) {
    .demo-modal {
      align-items: center;
      padding: 3rem 1.5rem;
    }
  }
  @media (max-width: 768px) {
    .feature-chip {
      grid-template-columns: 1fr;
      gap: 1rem;
    }
    .feature-tag {
      justify-self: flex-start;
    }
    .hero-preview {
      margin-top: 2rem;
    }
    .hero-preview__header {
      flex-direction: column;
      align-items: flex-start;
      gap: 1rem;
    }
    .hero-accent--one,
    .hero-accent--two {
      display: none;
    }
    .demo-modal {
      padding: 2rem 1rem;
    }
    .demo-modal__panel {
      padding: 2rem 1.5rem;
      margin: 2rem auto;
      max-height: none;
    }
    .demo-form__grid {
      grid-template-columns: 1fr;
    }
  }
`
document.head.appendChild(extra)

const PLAN_LABELS: Record<string, string> = {
  unica: 'Licencia Única',
  agencia: 'Licencia Agencia',
  software: 'Licencia de uso del software',
}

const lenis = new Lenis({ smoothWheel: true })
function raf(time: number) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}
requestAnimationFrame(raf)

const heroLines = document.querySelectorAll<HTMLElement>('.hero-title-line span')
if (heroLines.length) {
  gsap.set(heroLines, { yPercent: 120, opacity: 0 })
  gsap.to(heroLines, {
    yPercent: 0,
    opacity: 1,
    ease: 'expo.out',
    duration: 1.2,
    stagger: 0.08,
    delay: 0.2,
  })
}

gsap.from('.hero-intro', {
  opacity: 0,
  y: -20,
  duration: 1,
  ease: 'power3.out',
  delay: 0.3,
})

const heroMetaItems = document.querySelectorAll<HTMLElement>('.hero-meta-item')
if (heroMetaItems.length) {
  gsap.from(heroMetaItems, {
    y: 30,
    opacity: 0,
    duration: 1,
    ease: 'power3.out',
    stagger: 0.12,
    delay: 0.6,
  })
}


gsap.utils.toArray<HTMLElement>('[data-animate]').forEach(element => {
  gsap.from(element, {
    y: 80,
    opacity: 0,
    duration: 1.2,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: element,
      start: 'top 80%',
    },
  })
})

gsap.utils.toArray<HTMLElement>('[data-clip]').forEach(element => {
  gsap.from(element, {
    clipPath: 'inset(18% 18% 18% 18%)',
    opacity: 0,
    duration: 1.1,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: element,
      start: 'top 85%',
    },
  })
})

;(document.getElementById('year') as HTMLElement).innerText = new Date().getFullYear().toString()

const canvas = document.getElementById('chart') as HTMLCanvasElement
if (canvas?.getContext) {
  const weeklyHours = [
    { day: 'L', label: 'Lunes', worked: 8.1, target: 8, telework: false },
    { day: 'M', label: 'Martes', worked: 7.6, target: 8, telework: false },
    { day: 'X', label: 'Miércoles', worked: 8.4, target: 8, telework: true },
    { day: 'J', label: 'Jueves', worked: 7.9, target: 8, telework: false },
    { day: 'V', label: 'Viernes', worked: 7.2, target: 8, telework: true },
  ] as const

  const dpr = window.devicePixelRatio || 1
  const width = canvas.clientWidth
  const height = canvas.clientHeight
  canvas.width = width * dpr
  canvas.height = height * dpr
  const ctx = canvas.getContext('2d')!
  ctx.scale(dpr, dpr)

  const padding = { top: 20, right: 20, bottom: 36, left: 42 }
  const chartWidth = width - padding.left - padding.right
  const chartHeight = height - padding.top - padding.bottom
  const maxHour = Math.max(...weeklyHours.map(d => Math.max(d.target, d.worked)))
  const scaleMax = Math.ceil((maxHour + 0.5) * 2) / 2
  const step = 1

  const drawGrid = () => {
    ctx.save()
    ctx.strokeStyle = 'rgba(255,255,255,0.08)'
    ctx.lineWidth = 1
    for (let value = 0; value <= scaleMax; value += step) {
      const y = padding.top + chartHeight - (value / scaleMax) * chartHeight
      ctx.beginPath()
      ctx.moveTo(padding.left, y)
      ctx.lineTo(width - padding.right, y)
      ctx.stroke()
      ctx.fillStyle = 'rgba(255,255,255,0.4)'
      ctx.font = '11px "Inter", sans-serif'
      ctx.fillText(`${value.toFixed(0)}h`, 8, y + 4)
    }
    ctx.restore()
  }

  const drawChart = (progress: number) => {
    ctx.clearRect(0, 0, width, height)
    drawGrid()

    const groupWidth = chartWidth / weeklyHours.length
    const barWidth = groupWidth * 0.4
    const offset = (groupWidth - barWidth) / 2

    ctx.save()
    ctx.setLineDash([6, 6])
    ctx.strokeStyle = 'rgba(255,255,255,0.3)'
    ctx.lineWidth = 2
    const targetY = padding.top + chartHeight - (8 / scaleMax) * chartHeight
    ctx.beginPath()
    ctx.moveTo(padding.left, targetY)
    ctx.lineTo(width - padding.right, targetY)
    ctx.stroke()
    ctx.setLineDash([])
    ctx.fillStyle = 'rgba(255,255,255,0.6)'
    ctx.font = '11px "Inter", sans-serif'
    ctx.fillText('Objetivo 8h', width - padding.right - 74, targetY - 6)
    ctx.restore()

    weeklyHours.forEach((day, index) => {
      const baseX = padding.left + index * groupWidth + offset
      const targetHeight = (day.target / scaleMax) * chartHeight
      const workedHeight = ((day.worked * progress) / scaleMax) * chartHeight

      ctx.fillStyle = 'rgba(255,255,255,0.07)'
      ctx.fillRect(baseX, padding.top + chartHeight - targetHeight, barWidth, targetHeight)

      const color = day.telework ? '#22D3EE' : '#8B5CF6'
      ctx.fillStyle = color
      ctx.fillRect(baseX, padding.top + chartHeight - workedHeight, barWidth, workedHeight)

      ctx.fillStyle = 'rgba(255,255,255,0.85)'
      ctx.font = '12px "Inter", sans-serif'
      ctx.textAlign = 'center'
      ctx.fillText(day.day, baseX + barWidth / 2, height - 14)
      ctx.fillStyle = 'rgba(255,255,255,0.6)'
      ctx.font = '11px "Inter", sans-serif'
      ctx.fillText(`${day.worked.toFixed(1)}h`, baseX + barWidth / 2, padding.top + chartHeight - workedHeight - 6)

      if (day.telework) {
        ctx.fillStyle = 'rgba(34,211,238,0.75)'
        ctx.font = '10px "Inter", sans-serif'
        ctx.fillText('Teletrabajo', baseX + barWidth / 2, height - 2)
      }
    })
  }

  let animationStart: number | null = null
  const duration = 900
  const animate = (timestamp: number) => {
    if (!animationStart) animationStart = timestamp
    const elapsed = timestamp - animationStart
    const progress = Math.min(1, elapsed / duration)
    drawChart(progress)
    if (progress < 1) requestAnimationFrame(animate)
  }

  drawGrid()
  requestAnimationFrame(animate)
}

const form = document.getElementById('contactForm') as HTMLFormElement
const msg = document.getElementById('contactMsg') as HTMLParagraphElement
const planSelect = document.querySelector<HTMLSelectElement>('#contactForm select[name="plan"]')
const selectedPlanBadge = document.getElementById('selectedPlanBadge') as HTMLElement | null
const selectedPlanLabel = document.getElementById('selectedPlanLabel') as HTMLElement | null

const updateSelectedPlanUI = (value: string) => {
  if (!selectedPlanBadge || !selectedPlanLabel) return
  if (value) {
    selectedPlanBadge.classList.remove('hidden')
    selectedPlanLabel.textContent = PLAN_LABELS[value] || value
  } else {
    selectedPlanBadge.classList.add('hidden')
    selectedPlanLabel.textContent = '—'
  }
}

planSelect?.addEventListener('change', () => updateSelectedPlanUI(planSelect.value))
updateSelectedPlanUI(planSelect?.value || '')

document.querySelectorAll<HTMLAnchorElement>('.plan-cta').forEach(btn => {
  btn.addEventListener('click', () => {
    const planValue = btn.dataset.plan || ''
    if (planValue && planSelect) {
      planSelect.value = planValue
      planSelect.dispatchEvent(new Event('change'))
    }
  })
})

const faqTriggers = document.querySelectorAll<HTMLButtonElement>('.faq-trigger')
faqTriggers.forEach(trigger => {
  trigger.addEventListener('click', () => {
    const targetId = trigger.dataset.faqTarget
    if (!targetId) return
    const panel = document.getElementById(targetId)
    if (!panel) return
    const isOpen = !panel.classList.contains('hidden')

    faqTriggers.forEach(other => {
      if (other === trigger) return
      const otherId = other.dataset.faqTarget
      if (!otherId) return
      const otherPanel = document.getElementById(otherId)
      if (otherPanel && !otherPanel.classList.contains('hidden')) {
        otherPanel.classList.add('hidden')
        other.setAttribute('aria-expanded', 'false')
        const otherIcon = other.querySelector<HTMLElement>('.faq-icon')
        otherIcon?.classList.remove('rotate-45')
      }
    })

    const icon = trigger.querySelector<HTMLElement>('.faq-icon')
    if (isOpen) {
      panel.classList.add('hidden')
      trigger.setAttribute('aria-expanded', 'false')
      icon?.classList.remove('rotate-45')
    } else {
      panel.classList.remove('hidden')
      trigger.setAttribute('aria-expanded', 'true')
      icon?.classList.add('rotate-45')
    }
  })
})

const DEMO_API_URL = import.meta.env.VITE_DEMO_API_URL ?? 'https://panel.fichaje.app/api/demo'
const demoModal = document.getElementById('demo-modal') as HTMLElement | null
const demoForm = document.getElementById('demo-form') as HTMLFormElement | null
const demoSuccess = document.getElementById('demo-success') as HTMLElement | null
const demoError = document.getElementById('demo-error') as HTMLElement | null
const demoSubmit = document.getElementById('demo-submit') as HTMLButtonElement | null
const demoTriggers = document.querySelectorAll<HTMLElement>('[data-demo-trigger]')
const demoClosers = document.querySelectorAll<HTMLElement>('[data-demo-close]')

const resetDemoAlerts = () => {
  if (demoSuccess) {
    demoSuccess.style.display = 'none'
    demoSuccess.textContent = ''
  }
  if (demoError) {
    demoError.style.display = 'none'
    demoError.textContent = ''
  }
}

const showDemoMessage = (type: 'success' | 'error', message: string) => {
  if (!demoSuccess || !demoError) return
  demoSuccess.style.display = 'none'
  demoError.style.display = 'none'
  const target = type === 'success' ? demoSuccess : demoError
  target.textContent = message
  target.style.display = 'block'
}

const toggleDemoModal = (open: boolean) => {
  if (!demoModal) return
  demoModal.classList.toggle('demo-modal--open', open)
  demoModal.setAttribute('aria-hidden', (!open).toString())
  document.body.classList.toggle('modal-open', open)
  if (open) {
    resetDemoAlerts()
    demoForm?.reset()
    window.grecaptcha?.reset()
    demoSubmit && (demoSubmit.disabled = false)
    if (demoSubmit) demoSubmit.textContent = 'Crear demo'
    demoSubmit?.removeAttribute('aria-busy')
    setTimeout(() => {
      const firstField = demoForm?.querySelector('input, textarea') as HTMLInputElement | HTMLTextAreaElement | null
      firstField?.focus()
    }, 100)
  }
}

demoTriggers.forEach(trigger => {
  trigger.addEventListener('click', () => toggleDemoModal(true))
})

demoClosers.forEach(closer => {
  closer.addEventListener('click', () => toggleDemoModal(false))
})

demoModal?.addEventListener('click', event => {
  if (event.target === demoModal) {
    toggleDemoModal(false)
  }
})

document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && demoModal?.classList.contains('demo-modal--open')) {
    toggleDemoModal(false)
  }
})

demoForm?.addEventListener('submit', async event => {
  event.preventDefault()
  if (!demoSubmit) return

  const captcha = window.grecaptcha
  const originalLabel = demoSubmit.textContent || 'Crear demo'
  demoSubmit.disabled = true
  demoSubmit.textContent = 'Creando demo…'
  demoSubmit.setAttribute('aria-busy', 'true')
  resetDemoAlerts()

  const formData = new FormData(demoForm)
  const payload = {
    name: (formData.get('companyName') as string)?.trim(),
    taxId: (formData.get('companyTaxId') as string)?.trim(),
    email: (formData.get('companyEmail') as string)?.trim().toLowerCase(),
    phone: (formData.get('companyPhone') as string)?.trim(),
    address: (formData.get('companyAddress') as string)?.trim(),
    notes: ((formData.get('notes') as string) || '').trim() || undefined,
    adminUser: {
      firstName: (formData.get('adminFirstName') as string)?.trim(),
      lastName: (formData.get('adminLastName') as string)?.trim(),
      email: (formData.get('adminEmail') as string)?.trim().toLowerCase(),
    },
  }

  if (!payload.name || !payload.taxId || !payload.email || !payload.phone || !payload.address || !payload.adminUser.firstName || !payload.adminUser.lastName || !payload.adminUser.email) {
    showDemoMessage('error', 'Revisa los campos obligatorios.')
    demoSubmit.disabled = false
    demoSubmit.textContent = originalLabel
    demoSubmit.removeAttribute('aria-busy')
    return
  }

  if (!captcha || typeof captcha.getResponse !== 'function') {
    showDemoMessage('error', 'El captcha no se ha cargado. Recarga la página e inténtalo de nuevo.')
    demoSubmit.disabled = false
    demoSubmit.textContent = originalLabel
    demoSubmit.removeAttribute('aria-busy')
    return
  }

  const captchaToken = captcha.getResponse()

  if (!captchaToken) {
    showDemoMessage('error', 'Confirma que no eres un robot antes de continuar.')
    demoSubmit.disabled = false
    demoSubmit.textContent = originalLabel
    demoSubmit.removeAttribute('aria-busy')
    return
  }

  const payloadWithCaptcha = { ...payload, captchaToken }

  try {
    const response = await fetch(DEMO_API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payloadWithCaptcha),
    })

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}))
      const message = (errorData?.error as string) || 'No se pudo crear la demo. Inténtalo más tarde.'
      showDemoMessage('error', message)
      return
    }

    showDemoMessage('success', 'Demo creada. Revisa tu email para definir la contraseña inicial.')
    demoForm.reset()
    setTimeout(() => toggleDemoModal(false), 2200)
  } catch (error) {
    console.error('Demo creation error', error)
    showDemoMessage('error', 'No se pudo conectar con el servidor. Escríbenos a hola@fichaje.app')
  } finally {
    demoSubmit.disabled = false
    demoSubmit.textContent = originalLabel
    demoSubmit.removeAttribute('aria-busy')
    captcha.reset()
  }
})

form?.addEventListener('submit', async event => {
  event.preventDefault()
  const data = new FormData(form)
  const name = data.get('name') as string
  const email = data.get('email') as string
  const plan = data.get('plan') as string
  const planLabel = PLAN_LABELS[plan] || plan
  const message = data.get('message') as string
  msg.textContent = 'Enviando…'
  try {
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, plan, message }),
    })
    if (res.ok) {
      msg.textContent = '¡Gracias! Te contactaremos pronto.'
      form.reset()
      planSelect?.dispatchEvent(new Event('change'))
      return
    }

    const mailto = `mailto:alamas@dro.studio?subject=${encodeURIComponent('Contacto desde fichaje.app')}&body=${encodeURIComponent(`Nombre: ${name}\nEmail: ${email}\nPlan: ${planLabel}\n\n${message}`)}`
    window.location.href = mailto
    msg.textContent = 'No se pudo enviar por servidor. Abriendo tu cliente de correo…'
  } catch (error) {
    const mailto = `mailto:alamas@dro.studio?subject=${encodeURIComponent('Contacto desde fichaje.app')}&body=${encodeURIComponent(`Nombre: ${name}\nEmail: ${email}\nPlan: ${planLabel}\n\n${message}`)}`
    window.location.href = mailto
    msg.textContent = 'No se pudo enviar por servidor. Abriendo tu cliente de correo…'
  }
})
