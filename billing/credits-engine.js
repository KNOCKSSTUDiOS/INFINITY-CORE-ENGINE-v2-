// CREDITS ENGINE · simple credit accounting stub

window.InfinityCredits = {
  balance: 0,
  add(amount) {
    this.balance += amount;
    console.log("[CREDITS] Added:", amount, "New balance:", this.balance);
  },
  consume(amount) {
    this.balance -= amount;
    console.log("[CREDITS] Consumed:", amount, "New balance:", this.balance);
  },
};

