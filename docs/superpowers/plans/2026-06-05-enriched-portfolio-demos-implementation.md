# Enriched Portfolio Demos Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Memperkaya konten semua demo, menambah visual analitik, foto personal fiktif, dan thumbnail dashboard baru.

**Architecture:** Model data demo diperluas dengan story, process, dan FAQ. Renderer generik menampilkan bagian tersebut, sedangkan komponen analitik khusus menangani visual data tambahan dan hero personal memakai aset foto lokal.

**Tech Stack:** Next.js, React, TypeScript, Tailwind CSS, Vitest, Testing Library, local PNG/SVG assets.

---

### Task 1: Extend Demo Content Contract

- [ ] Add failing tests for story, process, FAQ, and portrait metadata.
- [ ] Extend types and all five demo records.
- [ ] Run focused data tests and commit.

### Task 2: Add Assets and Homepage Thumbnail

- [ ] Copy the generated fictional portrait to `public/images/demos/nadia-pratama.png`.
- [ ] Create an enriched dashboard SVG thumbnail.
- [ ] Add failing portfolio asset assertions.
- [ ] Point dashboard and personal demo data to the new assets.
- [ ] Run focused tests and commit.

### Task 3: Enrich Demo Renderer

- [ ] Add failing route tests for portrait, story, process, FAQ, and diagrams.
- [ ] Render personal portrait and shared rich content sections.
- [ ] Expand analytics with line, donut, channel, and activity visuals.
- [ ] Run route tests, lint, and typecheck; commit.

### Task 4: Verify and Publish

- [ ] Run all tests, lint, typecheck, and production build.
- [ ] Merge to local master.
- [ ] Repeat full verification and push master to GitHub.
