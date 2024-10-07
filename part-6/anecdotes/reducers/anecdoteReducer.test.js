import { notStrictEqual, strictEqual } from 'node:assert';
import { describe, test } from 'node:test';
import { asObject } from './anecdoteReducer';

describe('asObject', () => {
  test('returns an object with correct structure', () => {
    const result = asObject('Test anecdote');
    strictEqual(typeof result, 'object');
    strictEqual(typeof result.content, 'string');
    strictEqual(typeof result.id, 'string');
    strictEqual(typeof result.votes, 'number');
  });

  test('sets content correctly', () => {
    const anecdote = 'This is a test anecdote';
    const result = asObject(anecdote);
    strictEqual(result.content, anecdote);
  });

  test('generates unique ids', () => {
    const result1 = asObject('Anecdote 1');
    const result2 = asObject('Anecdote 2');
    notStrictEqual(result1.id, result2.id);
  });

  test('initializes votes to zero', () => {
    const result = asObject('New anecdote');
    strictEqual(result.votes, 0);
  });

  test('handles empty string input', () => {
    const result = asObject('');
    strictEqual(result.content, '');
    strictEqual(typeof result.id, 'string');
    strictEqual(result.votes, 0);
  });
});
