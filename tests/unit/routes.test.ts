import { describe, expect, it } from 'vitest';
import {
  getEquivalentPaths,
  getRouteMatrix,
  localizedPath,
} from '../../src/config/routes';

describe('route registry', () => {
  it('generates localized paths', () => {
    expect(localizedPath('en', 'technology')).toBe('/en/technology/');
    expect(localizedPath('fa')).toBe('/fa/');
  });

  it('preserves equivalent pages across languages', () => {
    expect(getEquivalentPaths('brands/zeghch').hy).toBe('/hy/brands/zeghch/');
    expect(getEquivalentPaths('brands/zeghch').fa).toBe('/fa/brands/zeghch/');
  });

  it('generates all indexable route combinations', () => {
    expect(getRouteMatrix()).toHaveLength(60);
  });
});
