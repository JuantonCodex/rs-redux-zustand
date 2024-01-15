// src/tests/setup.ts
import { expect, describe, it } from 'bun:test';

type ExpectType = typeof expect;
type DescribeType = typeof describe;
type ItType = typeof it;

/* eslint-disable no-var */
declare global {
  var expect: ExpectType;
  var describe: DescribeType;
  var it: ItType;
}
/* eslint-enable no-var */

/*
globalThis.expect = expect;
globalThis.describe = describe;
globalThis.it = it; */
