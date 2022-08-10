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

import { exists, mapValues } from '../runtime';
/**
 * PciHostDevice represents a host PCI device allowed for passthrough
 * @export
 * @interface V1PciHostDevice
 */
export interface V1PciHostDevice {
    /**
     * If true, KubeVirt will leave the allocation and monitoring to an external device plugin
     * @type {boolean}
     * @memberof V1PciHostDevice
     */
    externalResourceProvider?: boolean;
    /**
     * The vendor_id:product_id tuple of the PCI device
     * @type {string}
     * @memberof V1PciHostDevice
     */
    pciVendorSelector: string;
    /**
     * The name of the resource that is representing the device. Exposed by a device plugin and requested by VMs. Typically of the form vendor.com/product_nameThe name of the resource that is representing the device. Exposed by a device plugin and requested by VMs. Typically of the form vendor.com/product_name
     * @type {string}
     * @memberof V1PciHostDevice
     */
    resourceName: string;
}

export function V1PciHostDeviceFromJSON(json: any): V1PciHostDevice {
    return V1PciHostDeviceFromJSONTyped(json, false);
}

export function V1PciHostDeviceFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1PciHostDevice {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'externalResourceProvider': !exists(json, 'externalResourceProvider') ? undefined : json['externalResourceProvider'],
        'pciVendorSelector': json['pciVendorSelector'],
        'resourceName': json['resourceName'],
    };
}

export function V1PciHostDeviceToJSON(value?: V1PciHostDevice | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'externalResourceProvider': value.externalResourceProvider,
        'pciVendorSelector': value.pciVendorSelector,
        'resourceName': value.resourceName,
    };
}

