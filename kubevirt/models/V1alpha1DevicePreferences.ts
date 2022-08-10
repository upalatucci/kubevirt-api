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
import {
  V1BlockSize,
  V1BlockSizeFromJSON,
  V1BlockSizeToJSON,
  V1VGPUOptions,
  V1VGPUOptionsFromJSON,
  V1VGPUOptionsToJSON,
} from './';

/**
 * DevicePreferences contains various optional Device preferences.
 * @export
 * @interface V1alpha1DevicePreferences
 */
export interface V1alpha1DevicePreferences {
  /**
   * PreferredAutoattachGraphicsDevice optionally defines the preferred value of AutoattachGraphicsDevice
   * @type {boolean}
   * @memberof V1alpha1DevicePreferences
   */
  preferredAutoattachGraphicsDevice?: boolean;
  /**
   * PreferredAutoattachMemBalloon optionally defines the preferred value of AutoattachMemBalloon
   * @type {boolean}
   * @memberof V1alpha1DevicePreferences
   */
  preferredAutoattachMemBalloon?: boolean;
  /**
   * PreferredAutoattachPodInterface optionally defines the preferred value of AutoattachPodInterface
   * @type {boolean}
   * @memberof V1alpha1DevicePreferences
   */
  preferredAutoattachPodInterface?: boolean;
  /**
   * PreferredAutoattachSerialConsole optionally defines the preferred value of AutoattachSerialConsole
   * @type {boolean}
   * @memberof V1alpha1DevicePreferences
   */
  preferredAutoattachSerialConsole?: boolean;
  /**
   * PreferredBlockMultiQueue optionally enables the vhost multiqueue feature for virtio disks.
   * @type {boolean}
   * @memberof V1alpha1DevicePreferences
   */
  preferredBlockMultiQueue?: boolean;
  /**
   * PreferredCdromBus optionally defines the preferred bus for Cdrom Disk devices.
   * @type {string}
   * @memberof V1alpha1DevicePreferences
   */
  preferredCdromBus?: string;
  /**
   * PreferredDisableHotplug optionally defines the preferred value of DisableHotplug
   * @type {boolean}
   * @memberof V1alpha1DevicePreferences
   */
  preferredDisableHotplug?: boolean;
  /**
   *
   * @type {V1BlockSize}
   * @memberof V1alpha1DevicePreferences
   */
  preferredDiskBlockSize?: V1BlockSize;
  /**
   * PreferredDiskBus optionally defines the preferred bus for Disk Disk devices.
   * @type {string}
   * @memberof V1alpha1DevicePreferences
   */
  preferredDiskBus?: string;
  /**
   * PreferredCache optionally defines the DriverCache to be used by Disk devices.
   * @type {string}
   * @memberof V1alpha1DevicePreferences
   */
  preferredDiskCache?: string;
  /**
   * PreferredDedicatedIoThread optionally enables dedicated IO threads for Disk devices.
   * @type {boolean}
   * @memberof V1alpha1DevicePreferences
   */
  preferredDiskDedicatedIoThread?: boolean;
  /**
   * PreferredIo optionally defines the QEMU disk IO mode to be used by Disk devices.
   * @type {string}
   * @memberof V1alpha1DevicePreferences
   */
  preferredDiskIO?: string;
  /**
   * PreferredInputBus optionally defines the preferred bus for Input devices.
   * @type {string}
   * @memberof V1alpha1DevicePreferences
   */
  preferredInputBus?: string;
  /**
   * PreferredInputType optionally defines the preferred type for Input devices.
   * @type {string}
   * @memberof V1alpha1DevicePreferences
   */
  preferredInputType?: string;
  /**
   * PreferredInterfaceModel optionally defines the preferred model to be used by Interface devices.
   * @type {string}
   * @memberof V1alpha1DevicePreferences
   */
  preferredInterfaceModel?: string;
  /**
   * PreferredLunBus optionally defines the preferred bus for Lun Disk devices.
   * @type {string}
   * @memberof V1alpha1DevicePreferences
   */
  preferredLunBus?: string;
  /**
   * PreferredNetworkInterfaceMultiQueue optionally enables the vhost multiqueue feature for virtio interfaces.
   * @type {boolean}
   * @memberof V1alpha1DevicePreferences
   */
  preferredNetworkInterfaceMultiQueue?: boolean;
  /**
   * Rng represents the random device passed from host
   * @type {object}
   * @memberof V1alpha1DevicePreferences
   */
  preferredRng?: object;
  /**
   * PreferredSoundModel optionally defines the preferred model for Sound devices.
   * @type {string}
   * @memberof V1alpha1DevicePreferences
   */
  preferredSoundModel?: string;
  /**
   *
   * @type {object}
   * @memberof V1alpha1DevicePreferences
   */
  preferredTPM?: object;
  /**
   * PreferredUseVirtioTransitional optionally defines the preferred value of UseVirtioTransitional
   * @type {boolean}
   * @memberof V1alpha1DevicePreferences
   */
  preferredUseVirtioTransitional?: boolean;
  /**
   *
   * @type {V1VGPUOptions}
   * @memberof V1alpha1DevicePreferences
   */
  preferredVirtualGPUOptions?: V1VGPUOptions;
}

export function V1alpha1DevicePreferencesFromJSON(json: any): V1alpha1DevicePreferences {
  return V1alpha1DevicePreferencesFromJSONTyped(json, false);
}

export function V1alpha1DevicePreferencesFromJSONTyped(
  json: any,
  _ignoreDiscriminator: boolean,
): V1alpha1DevicePreferences {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    preferredAutoattachGraphicsDevice: !exists(json, 'preferredAutoattachGraphicsDevice')
      ? undefined
      : json['preferredAutoattachGraphicsDevice'],
    preferredAutoattachMemBalloon: !exists(json, 'preferredAutoattachMemBalloon')
      ? undefined
      : json['preferredAutoattachMemBalloon'],
    preferredAutoattachPodInterface: !exists(json, 'preferredAutoattachPodInterface')
      ? undefined
      : json['preferredAutoattachPodInterface'],
    preferredAutoattachSerialConsole: !exists(json, 'preferredAutoattachSerialConsole')
      ? undefined
      : json['preferredAutoattachSerialConsole'],
    preferredBlockMultiQueue: !exists(json, 'preferredBlockMultiQueue')
      ? undefined
      : json['preferredBlockMultiQueue'],
    preferredCdromBus: !exists(json, 'preferredCdromBus') ? undefined : json['preferredCdromBus'],
    preferredDisableHotplug: !exists(json, 'preferredDisableHotplug')
      ? undefined
      : json['preferredDisableHotplug'],
    preferredDiskBlockSize: !exists(json, 'preferredDiskBlockSize')
      ? undefined
      : V1BlockSizeFromJSON(json['preferredDiskBlockSize']),
    preferredDiskBus: !exists(json, 'preferredDiskBus') ? undefined : json['preferredDiskBus'],
    preferredDiskCache: !exists(json, 'preferredDiskCache')
      ? undefined
      : json['preferredDiskCache'],
    preferredDiskDedicatedIoThread: !exists(json, 'preferredDiskDedicatedIoThread')
      ? undefined
      : json['preferredDiskDedicatedIoThread'],
    preferredDiskIO: !exists(json, 'preferredDiskIO') ? undefined : json['preferredDiskIO'],
    preferredInputBus: !exists(json, 'preferredInputBus') ? undefined : json['preferredInputBus'],
    preferredInputType: !exists(json, 'preferredInputType')
      ? undefined
      : json['preferredInputType'],
    preferredInterfaceModel: !exists(json, 'preferredInterfaceModel')
      ? undefined
      : json['preferredInterfaceModel'],
    preferredLunBus: !exists(json, 'preferredLunBus') ? undefined : json['preferredLunBus'],
    preferredNetworkInterfaceMultiQueue: !exists(json, 'preferredNetworkInterfaceMultiQueue')
      ? undefined
      : json['preferredNetworkInterfaceMultiQueue'],
    preferredRng: !exists(json, 'preferredRng') ? undefined : json['preferredRng'],
    preferredSoundModel: !exists(json, 'preferredSoundModel')
      ? undefined
      : json['preferredSoundModel'],
    preferredTPM: !exists(json, 'preferredTPM') ? undefined : json['preferredTPM'],
    preferredUseVirtioTransitional: !exists(json, 'preferredUseVirtioTransitional')
      ? undefined
      : json['preferredUseVirtioTransitional'],
    preferredVirtualGPUOptions: !exists(json, 'preferredVirtualGPUOptions')
      ? undefined
      : V1VGPUOptionsFromJSON(json['preferredVirtualGPUOptions']),
  };
}

export function V1alpha1DevicePreferencesToJSON(value?: V1alpha1DevicePreferences | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    preferredAutoattachGraphicsDevice: value.preferredAutoattachGraphicsDevice,
    preferredAutoattachMemBalloon: value.preferredAutoattachMemBalloon,
    preferredAutoattachPodInterface: value.preferredAutoattachPodInterface,
    preferredAutoattachSerialConsole: value.preferredAutoattachSerialConsole,
    preferredBlockMultiQueue: value.preferredBlockMultiQueue,
    preferredCdromBus: value.preferredCdromBus,
    preferredDisableHotplug: value.preferredDisableHotplug,
    preferredDiskBlockSize: V1BlockSizeToJSON(value.preferredDiskBlockSize),
    preferredDiskBus: value.preferredDiskBus,
    preferredDiskCache: value.preferredDiskCache,
    preferredDiskDedicatedIoThread: value.preferredDiskDedicatedIoThread,
    preferredDiskIO: value.preferredDiskIO,
    preferredInputBus: value.preferredInputBus,
    preferredInputType: value.preferredInputType,
    preferredInterfaceModel: value.preferredInterfaceModel,
    preferredLunBus: value.preferredLunBus,
    preferredNetworkInterfaceMultiQueue: value.preferredNetworkInterfaceMultiQueue,
    preferredRng: value.preferredRng,
    preferredSoundModel: value.preferredSoundModel,
    preferredTPM: value.preferredTPM,
    preferredUseVirtioTransitional: value.preferredUseVirtioTransitional,
    preferredVirtualGPUOptions: V1VGPUOptionsToJSON(value.preferredVirtualGPUOptions),
  };
}
