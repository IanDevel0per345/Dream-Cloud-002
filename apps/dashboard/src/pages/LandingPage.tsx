/*
 * Copyright 2025 Daytona Platforms Inc.
 * SPDX-License-Identifier: AGPL-3.0
 */

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Activity,
  ArrowRight,
  Bot,
  Check,
  Code2,
  Database,
  Globe2,
  Layers3,
  Lock,
  Server,
  TerminalSquare,
  Zap,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router'

const products = [
  {
    icon: <Bot className="size-5" />,
    title: 'Bot Hosting',
    description: 'Hospede bots do Discord, WhatsApp e automacoes com logs ao vivo, restart rapido e deploy continuo.',
  },
  {
    icon: <Code2 className="size-5" />,
    title: 'API Runtime',
    description: 'Suba APIs Node, Python, Go ou containers com variaveis, dominios, webhooks e metricas em tempo real.',
  },
  {
    icon: <Globe2 className="size-5" />,
    title: 'Site Deploy',
    description: 'Publique sites estaticos, dashboards e apps modernos com preview, SSL e rollback em poucos cliques.',
  },
]

const metrics = [
  ['Deploys hoje', '1.248'],
  ['Uptime global', '99.98%'],
  ['Regioes', '8'],
  ['Cold start', '< 120ms'],
]

const plans = [
  ['Starter', 'R$ 9', 'Bots pequenos, APIs de teste e sites pessoais'],
  ['Scale', 'R$ 39', 'Projetos em producao, workers e dashboards'],
  ['Business', 'Custom', 'Times, limites dedicados e suporte prioritario'],
]

const workloads = ['Discord bots', 'APIs REST', 'Sites React', 'Workers', 'Webhooks', 'Painel admin']

const LandingPage: React.FC = () => {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-30 border-b border-border/70 bg-background/85 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5">
          <Link to="/" className="flex items-center gap-3 font-semibold tracking-tight">
            <span className="grid size-8 place-items-center rounded-md border bg-muted">
              <Server className="size-4" />
            </span>
            Dream Cloud
          </Link>
          <nav className="hidden items-center gap-6 text-sm text-muted-foreground md:flex">
            <a href="#products" className="hover:text-foreground">
              Produtos
            </a>
            <a href="#dashboard" className="hover:text-foreground">
              Dashboard
            </a>
            <a href="#plans" className="hover:text-foreground">
              Planos
            </a>
          </nav>
          <Button asChild size="sm">
            <a href="#plans">
              Comecar <ArrowRight className="size-4" />
            </a>
          </Button>
        </div>
      </header>

      <section className="mx-auto grid max-w-7xl gap-10 px-5 py-16 md:grid-cols-[1.05fr_0.95fr] md:py-24">
        <div className="flex flex-col justify-center">
          <Badge className="mb-5 w-fit rounded-md" variant="secondary">
            Cloud para bots, APIs e sites
          </Badge>
          <h1 className="max-w-3xl text-5xl font-semibold tracking-tight md:text-7xl">
            Infra simples para projetos que precisam ficar online.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
            A Dream Cloud centraliza deploy, logs, dominios, variaveis, workers e monitoramento em uma experiencia
            direta para desenvolvedores.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg">
              <a href="#dashboard">
                Ver painel <ArrowRight className="size-4" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href="#products">Explorar produtos</a>
            </Button>
          </div>
          <div className="mt-10 flex flex-wrap gap-2">
            {workloads.map((item) => (
              <span key={item} className="rounded-md border px-3 py-1 text-sm text-muted-foreground">
                {item}
              </span>
            ))}
          </div>
        </div>

        <div
          id="dashboard"
          className="rounded-lg border bg-card p-3 shadow-2xl shadow-black/20 md:mt-8"
          aria-label="Dream Cloud dashboard preview"
        >
          <div className="flex items-center justify-between border-b px-3 py-3">
            <div className="flex items-center gap-2">
              <span className="size-2 rounded-full bg-red-500" />
              <span className="size-2 rounded-full bg-yellow-500" />
              <span className="size-2 rounded-full bg-green-500" />
            </div>
            <span className="text-xs text-muted-foreground">dashboard.dreamcloud.app</span>
          </div>
          <div className="grid gap-3 p-3">
            <div className="grid gap-3 sm:grid-cols-4">
              {metrics.map(([label, value]) => (
                <div key={label} className="rounded-md border bg-background p-4">
                  <p className="text-xs text-muted-foreground">{label}</p>
                  <p className="mt-2 text-2xl font-semibold">{value}</p>
                </div>
              ))}
            </div>
            <div className="grid gap-3 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="rounded-md border bg-background p-4">
                <div className="mb-4 flex items-center justify-between">
                  <h2 className="font-medium">Projetos ativos</h2>
                  <Activity className="size-4 text-muted-foreground" />
                </div>
                {['nyan-hub-bot', 'cohesion-api', 'dream-site'].map((project, index) => (
                  <div key={project} className="flex items-center justify-between border-t py-3 text-sm">
                    <div>
                      <p className="font-medium">{project}</p>
                      <p className="text-muted-foreground">{['Bot', 'API', 'Site'][index]} em producao</p>
                    </div>
                    <Badge variant={index === 1 ? 'outline' : 'secondary'}>Online</Badge>
                  </div>
                ))}
              </div>
              <div className="rounded-md border bg-background p-4">
                <div className="mb-4 flex items-center gap-2">
                  <TerminalSquare className="size-4" />
                  <h2 className="font-medium">Deploy log</h2>
                </div>
                <div className="space-y-3 font-mono text-xs text-muted-foreground">
                  <p>$ dream deploy --prod</p>
                  <p className="text-foreground">Build completed in 18s</p>
                  <p>Assigning domain...</p>
                  <p className="text-green-500">Production ready</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="products" className="border-y bg-muted/30">
        <div className="mx-auto grid max-w-7xl gap-4 px-5 py-14 md:grid-cols-3">
          {products.map((product) => (
            <article key={product.title} className="rounded-lg border bg-card p-6">
              <div className="mb-5 grid size-10 place-items-center rounded-md border bg-background">{product.icon}</div>
              <h2 className="text-xl font-semibold">{product.title}</h2>
              <p className="mt-3 leading-7 text-muted-foreground">{product.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-5 py-16 md:grid-cols-2">
        <div>
          <Badge className="mb-5 rounded-md" variant="outline">
            Controle completo
          </Badge>
          <h2 className="text-4xl font-semibold tracking-tight">Tudo que uma cloud moderna precisa ter.</h2>
        </div>
        <div className="grid gap-3">
          {(
            [
            [Zap, 'Deploy automatico por Git ou upload direto'],
            [Lock, 'SSL, secrets e ambientes separados'],
            [Database, 'Volumes, backups e storage persistente'],
            [Layers3, 'Escala para bots, APIs, sites e workers'],
          ] satisfies [LucideIcon, string][]
          ).map(([Icon, text]) => (
            <div key={text} className="flex items-center gap-3 rounded-md border p-4">
              <Icon className="size-5 text-muted-foreground" />
              <span>{text}</span>
            </div>
          ))}
        </div>
      </section>

      <section id="plans" className="mx-auto max-w-7xl px-5 pb-20">
        <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <Badge className="mb-4 rounded-md" variant="secondary">
              Planos
            </Badge>
            <h2 className="text-4xl font-semibold tracking-tight">Comece pequeno. Escale quando precisar.</h2>
          </div>
          <p className="max-w-xl text-muted-foreground">
            Precos pensados para criadores, devs independentes e times que querem colocar infraestrutura no ar sem
            complicacao.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {plans.map(([name, price, description]) => (
            <article key={name} className="rounded-lg border bg-card p-6">
              <h3 className="text-xl font-semibold">{name}</h3>
              <p className="mt-4 text-4xl font-semibold">{price}</p>
              <p className="mt-3 min-h-12 text-muted-foreground">{description}</p>
              <div className="mt-6 space-y-3 text-sm">
                {['Logs ao vivo', 'Dominios customizados', 'Deploy rapido'].map((feature) => (
                  <p key={feature} className="flex items-center gap-2">
                    <Check className="size-4" /> {feature}
                  </p>
                ))}
              </div>
              <Button className="mt-6 w-full" variant={name === 'Scale' ? 'default' : 'outline'}>
                Escolher {name}
              </Button>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}

export default LandingPage
