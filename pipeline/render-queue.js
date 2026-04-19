// RENDER QUEUE · front-end stub for a future backend queue

window.InfinityRenderQueue = {
  jobs: [],
  add(job) {
    this.jobs.push(job);
    console.log("[QUEUE] Added job:", job);
  },
  list() {
    return this.jobs;
  },
};

