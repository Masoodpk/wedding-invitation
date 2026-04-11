<template>
  <main class="app-shell flex items-center justify-center px-6 py-16">
    <div class="w-full max-w-3xl text-center app-card px-8 py-14 md:px-14">
      <div class="app-kicker text-[12px]">Taplink Style Builder</div>
      <h1 class="mt-6 text-[clamp(40px,6vw,70px)] leading-[1.05] app-title">
        Create a wedding website
        <br />
        from templates
      </h1>
      <p class="mt-6 text-[16px] md:text-[18px] app-muted max-w-2xl mx-auto">
        Enter your details, preview templates, and publish a shareable link.
      </p>

      <div class="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
        <NuxtLink
          to="/start"
          class="app-btn app-btn-primary px-7 py-3"
        >
          Get Started
        </NuxtLink>
        <NuxtLink
          to="/templates"
          class="app-btn app-btn-secondary px-7 py-3"
        >
          Browse Templates
        </NuxtLink>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
// Homepage replacing app/page.tsx
</script>
