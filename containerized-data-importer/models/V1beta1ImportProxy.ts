/* tslint:disable */
/* eslint-disable */
/**
 * KubeVirt Containerized Data Importer API
 * Containerized Data Importer for KubeVirt.
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: kubevirt-dev@googlegroups.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * ImportProxy provides the information on how to configure the importer pod proxy.
 * @export
 * @interface V1beta1ImportProxy
 */
export interface V1beta1ImportProxy {
    /**
     * HTTPProxy is the URL http://<username>:<pswd>@<ip>:<port> of the import proxy for HTTP requests.  Empty means unset and will not result in the import pod env var.
     * @type {string}
     * @memberof V1beta1ImportProxy
     */
    hTTPProxy?: string;
    /**
     * HTTPSProxy is the URL https://<username>:<pswd>@<ip>:<port> of the import proxy for HTTPS requests.  Empty means unset and will not result in the import pod env var.
     * @type {string}
     * @memberof V1beta1ImportProxy
     */
    hTTPSProxy?: string;
    /**
     * NoProxy is a comma-separated list of hostnames and/or CIDRs for which the proxy should not be used. Empty means unset and will not result in the import pod env var.
     * @type {string}
     * @memberof V1beta1ImportProxy
     */
    noProxy?: string;
    /**
     * TrustedCAProxy is the name of a ConfigMap in the cdi namespace that contains a user-provided trusted certificate authority (CA) bundle. The TrustedCAProxy ConfigMap is consumed by the DataImportCron controller for creating cronjobs, and by the import controller referring a copy of the ConfigMap in the import namespace. Here is an example of the ConfigMap (in yaml):
     * 
     * apiVersion: v1 kind: ConfigMap metadata:
     *   name: my-ca-proxy-cm
     *   namespace: cdi
     * data:
     *   ca.pem: |
     *     -----BEGIN CERTIFICATE-----
     * 	   ... <base64 encoded cert> ...
     * 	   -----END CERTIFICATE-----
     * @type {string}
     * @memberof V1beta1ImportProxy
     */
    trustedCAProxy?: string;
}

export function V1beta1ImportProxyFromJSON(json: any): V1beta1ImportProxy {
    return V1beta1ImportProxyFromJSONTyped(json, false);
}

export function V1beta1ImportProxyFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1beta1ImportProxy {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'hTTPProxy': !exists(json, 'HTTPProxy') ? undefined : json['HTTPProxy'],
        'hTTPSProxy': !exists(json, 'HTTPSProxy') ? undefined : json['HTTPSProxy'],
        'noProxy': !exists(json, 'noProxy') ? undefined : json['noProxy'],
        'trustedCAProxy': !exists(json, 'trustedCAProxy') ? undefined : json['trustedCAProxy'],
    };
}

export function V1beta1ImportProxyToJSON(value?: V1beta1ImportProxy | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'HTTPProxy': value.hTTPProxy,
        'HTTPSProxy': value.hTTPSProxy,
        'noProxy': value.noProxy,
        'trustedCAProxy': value.trustedCAProxy,
    };
}

