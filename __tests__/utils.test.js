const { format_date, format_plural } = require('../utils/helpers');

test('format_date() returns a date string', () => {
    const date = new Date('2022-07-23 11:59:00');

    expect(format_date(date)).toBe('7/23/2022');
});

test('format_plural() returns a pluralized string', () => {
    const word1 = format_plural('comment',1);
    const word2 = format_plural('post',2);
    const word3 = format_plural('upvote',2);

    expect(word1).toBe('comment');
    expect(word2).toBe('posts');
    expect(word3).toBe('upvotes');
});