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
    expect(localizedPath('ar')).toBe('/ar/');
  });

  it('preserves equivalent pages across languages', () => {
    expect(getEquivalentPaths('brands/zeghch').hy).toBe('/hy/brands/zeghch/');
    expect(getEquivalentPaths('brands/zeghch').fa).toBe('/fa/brands/zeghch/');
    expect(getEquivalentPaths('brands/zeghch').ar).toBe('/ar/brands/zeghch/');
  });

  it('generates all indexable route combinations', () => {
    expect(getRouteMatrix()).toHaveLength(72);
  });
});
