<template>
  <div class="min-h-screen min-w-screen bg-slate-100/50 dark:bg-slate-100/50">
    <Sidebar />
    <div class="mx-auto md:pl-60 flex flex-col flex-1">
      <Navbar />
      <main>
        <slot />
      </main>
    </div>
  </div>
</template>