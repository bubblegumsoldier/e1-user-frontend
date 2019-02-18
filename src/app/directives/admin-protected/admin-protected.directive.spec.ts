import { AdminProtectedDirective } from './admin-protected.directive';

describe('WriteProtectedDirective', () => {
  it('should create an instance', () => {
    const directive = new AdminProtectedDirective();
    expect(directive).toBeTruthy();
  });
});
