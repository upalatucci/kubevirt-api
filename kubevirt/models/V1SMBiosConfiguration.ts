/* tslint:disable */
/* eslint-disable */
/**
 * KubeVirt API
 * This is KubeVirt API an add-on for Kubernetes.
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: kubevirt-dev@googlegroups.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists } from '../runtime';
/**
 *
 * @export
 * @interface V1SMBiosConfiguration
 */
export interface V1SMBiosConfiguration {
  /**
   *
   * @type {string}
   * @memberof V1SMBiosConfiguration
   */
  family?: string;
  /**
   *
   * @type {string}
   * @memberof V1SMBiosConfiguration
   */
  manufacturer?: string;
  /**
   *
   * @type {string}
   * @memberof V1SMBiosConfiguration
   */
  product?: string;
  /**
   *
   * @type {string}
   * @memberof V1SMBiosConfiguration
   */
  sku?: string;
  /**
   *
   * @type {string}
   * @memberof V1SMBiosConfiguration
   */
  version?: string;
}

export function V1SMBiosConfigurationFromJSON(json: any): V1SMBiosConfiguration {
  return V1SMBiosConfigurationFromJSONTyped(json, false);
}

export function V1SMBiosConfigurationFromJSONTyped(
  json: any,
  _ignoreDiscriminator: boolean,
): V1SMBiosConfiguration {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    family: !exists(json, 'family') ? undefined : json['family'],
    manufacturer: !exists(json, 'manufacturer') ? undefined : json['manufacturer'],
    product: !exists(json, 'product') ? undefined : json['product'],
    sku: !exists(json, 'sku') ? undefined : json['sku'],
    version: !exists(json, 'version') ? undefined : json['version'],
  };
}

export function V1SMBiosConfigurationToJSON(value?: V1SMBiosConfiguration | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    family: value.family,
    manufacturer: value.manufacturer,
    product: value.product,
    sku: value.sku,
    version: value.version,
  };
}
