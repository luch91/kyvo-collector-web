/**
 * Mock service boundary for the prototype. UI code can use these functions
 * while a real Kyvo API is introduced without changing screen contracts.
 */
export const mockApi = {
  async getCases(cases) { return Promise.resolve(cases) },
  async saveContactAttempt(attempt) { return Promise.resolve({ ...attempt, savedAt: new Date().toISOString() }) },
  async savePromiseToPay(ptp) { return Promise.resolve({ ...ptp, savedAt: new Date().toISOString() }) },
  async savePayment(payment) { return Promise.resolve({ ...payment, savedAt: new Date().toISOString() }) },
}
