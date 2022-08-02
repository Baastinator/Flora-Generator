import { SizeToStringPipe } from './size-to-string.pipe';

describe('SizeToStringPipe', () => {
  it('create an instance', () => {
    const pipe = new SizeToStringPipe();
    expect(pipe).toBeTruthy();
  });
});
