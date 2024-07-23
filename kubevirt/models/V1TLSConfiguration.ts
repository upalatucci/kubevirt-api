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
 * TLSConfiguration holds TLS options
 * @export
 * @interface V1TLSConfiguration
 */
export interface V1TLSConfiguration {
  /**
   *
   * @type {Array<string>}
   * @memberof V1TLSConfiguration
   */
  ciphers?: Array<string>;
  /**
   * MinTLSVersion is a way to specify the minimum protocol version that is acceptable for TLS connections. Protocol versions are based on the following most common TLS configurations:
   *
   *   https://ssl-config.mozilla.org/
   *
   * Note that SSLv3.0 is not a supported protocol version due to well known vulnerabilities such as POODLE: https://en.wikipedia.org/wiki/POODLE
   * @type {string}
   * @memberof V1TLSConfiguration
   */
  minTLSVersion?: string;
}

export function V1TLSConfigurationFromJSON(json: any): V1TLSConfiguration {
  return V1TLSConfigurationFromJSONTyped(json, false);
}

export function V1TLSConfigurationFromJSONTyped(
  json: any,
  _ignoreDiscriminator: boolean,
): V1TLSConfiguration {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    ciphers: !exists(json, 'ciphers') ? undefined : json['ciphers'],
    minTLSVersion: !exists(json, 'minTLSVersion') ? undefined : json['minTLSVersion'],
  };
}

export function V1TLSConfigurationToJSON(value?: V1TLSConfiguration | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    ciphers: value.ciphers,
    minTLSVersion: value.minTLSVersion,
  };
}
