// @flow
// package: examplecom
// file: proto/examplecom/enum_message.proto

import * as jspb from "google-protobuf";
import * as proto_othercom_external_enum_pb from "../../proto/othercom/external_enum_pb";

export class EnumMessage extends jspb.Message {
  getInternalEnum: () => typeof EnumMessage.InternalEnum;
  setInternalEnum: (value: typeof EnumMessage.InternalEnum) => void;

  clearInternalEnumsList: () => void;
  getInternalEnumsList: () => Array<EnumMessage.InternalEnum>;
  setInternalEnumsList: (value: Array<EnumMessage.InternalEnum>) => void;
  addInternalEnums: (value: EnumMessage.InternalEnum, index?: number) => EnumMessage.InternalEnum;

  getExternalEnum: () => typeof proto_othercom_external_enum_pb.ExternalEnum;
  setExternalEnum: (value: typeof proto_othercom_external_enum_pb.ExternalEnum) => void;

  clearExternalEnumsList: () => void;
  getExternalEnumsList: () => Array<proto_othercom_external_enum_pb.ExternalEnum>;
  setExternalEnumsList: (value: Array<proto_othercom_external_enum_pb.ExternalEnum>) => void;
  addExternalEnums: (value: proto_othercom_external_enum_pb.ExternalEnum, index?: number) => proto_othercom_external_enum_pb.ExternalEnum;

  serializeBinary: () => Uint8Array;
  toObject: (includeInstance?: boolean) => EnumMessage$AsObject;
  static toObject: (includeInstance: boolean, msg: EnumMessage) => EnumMessage$AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter: (message: EnumMessage, writer: jspb.BinaryWriter) => void;
  static deserializeBinary: (bytes: Uint8Array) => EnumMessage;
  static deserializeBinaryFromReader: (message: EnumMessage, reader: jspb.BinaryReader) => EnumMessage;
}

export type EnumMessage$AsObject = {
  internalEnum: typeof EnumMessage.InternalEnum,
  internalEnumsList: Array<EnumMessage.InternalEnum>,
  externalEnum: typeof proto_othercom_external_enum_pb.ExternalEnum,
  externalEnumsList: Array<proto_othercom_external_enum_pb.ExternalEnum>,
}

export const EnumMessage$InternalEnum = {
  DEFAULT: 0,
  FIRST: 1,
  SECOND: 2,
  THIRD: 3,
}

