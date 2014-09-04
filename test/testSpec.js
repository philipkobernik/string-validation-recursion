"use strict";

var words = ['dog', 'golf', 'friend', 'do', 'go'];

describe('#validConstruction', function() {
  it('doggo should be true', function() {
    expect(validateSentence(words, 'doggo')).toBeTruthy();
  });

  it('dogo should be true', function() {
    expect(validateSentence(words, 'dogo')).toBeTruthy();
  });

  it('dogolf should be true', function() {
    expect(validateSentence(words, 'dogolf')).toBeTruthy();
  });
  it('dodododododog should be true', function() {
    expect(validateSentence(words, 'dododododododog')).toBeTruthy();
  });

  it('dogodogolfdoggofrienddodoggolfdogogogodog should be true', function() {
    expect(validateSentence(words, 'dogodogolfdoggofrienddodoggolfdogogogodog')).toBeTruthy();
  });

  it('friendo should be false', function() {
    expect(validateSentence(words, 'friendo')).toBeFalsy();
  });

});
