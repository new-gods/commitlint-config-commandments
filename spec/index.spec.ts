import * as config from '../index';
import lint from '@commitlint/lint';

describe('Commitlint config', () => {
  const longSentence = 'As he crossed toward the pharmacy at the corner he involuntarily turned his head because of a burst of light that had ricocheted from his temple, and saw, with that quick smile with which we greet a rainbow or a rose, a blindingly white parallelogram of sky being unloaded from the van—a dresser with mirrors across which, as across a cinema screen, passed a flawlessly clear reflection of boughs sliding and swaying not arboreally, but with a human vacillation, produced by the nature of those who were carrying this sky, these boughs, this gliding façade';

  it('should enforce Commandment 1. Separate header from body, and body from footer with a blank line', done => {
    const message = 'Fix: Subject\nBody.';
    lint(message, config.rules)
      .then(outcome => {
        expect(outcome.errors).not.toEqual([]);
        expect(outcome.errors.map(e => e.message)).toContain('body must have leading blank line');
      })
      .then(done);
  });

  it('should enforce Commandment 2. Limit the header to 72 characters', done => {
    const message = `Fix: ${longSentence}`;
    lint(message, config.rules)
      .then(outcome => {
        expect(outcome.errors).not.toEqual([]);
        expect(outcome.errors.map(e => e.message)).toContain(`header must not be longer than 72 characters, current length is ${message.length}`);
      })
      .then(done);
  });

  it('should enforce Commandment 3. Thou shalt not use any case but sentence case for the subject', done => {
    const message = 'Fix: update README';
    lint(message, config.rules)
      .then(outcome => {
        expect(outcome.errors).not.toEqual([]);
        expect(outcome.errors.map(e => e.message)).toContain('subject must be sentence-case');
      })
      .then(done);
  });

  it('should enforce Commandment 4. Thou shalt not end the subject with a period', done => {
    const message = 'Fix: Updated README.';
    lint(message, config.rules)
      .then(outcome => {
        expect(outcome.errors).not.toEqual([]);
        expect(outcome.errors.map(e => e.message)).toContain('subject may not end with full stop');
      })
      .then(done);
  });

  it('should enforce Commandment 6. Wrap the body and footer at 72 characters', done => {
    const message = `Fix: Updated README\n\n${longSentence}`;
    lint(message, config.rules)
      .then(outcome => {
        expect(outcome.errors).not.toEqual([]);
        expect(outcome.errors.map(e => e.message)).toContain(`body's lines must not be longer than 72 characters`);
      })
      .then(done);
  });

  it('should work with auto-generated revert messages', done => {
    const message = `Revert "This commit"`;
    lint(message, config.rules)
      .then(outcome => expect(outcome.errors).toEqual([]))
      .then(done);
  });
});
