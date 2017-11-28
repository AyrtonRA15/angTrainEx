import { DomainOnlyPipe } from './domain-only.pipe';

describe('DomainOnlyPipe', () => {
  it('create an instance', () => {
    const pipe = new DomainOnlyPipe();
    expect(pipe).toBeTruthy();
  });
});
