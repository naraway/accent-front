import { Constructor } from '~/lib/core';
import ApiException from './ApiException';
import TrailMessageType from "./TrailMessageType";


class TrailMessage<T extends object | object[]> {
  //
  messageType: TrailMessageType;
  responseType: any;
  responseName: string;

  constructor(messageType: TrailMessageType, responseType: Constructor, responseName: string) {
    //
    this.messageType = messageType;
    this.responseType = responseType;
    this.responseName = responseName;
  }

  getResponse(): T | T[] | null {
    //
    return this[this.responseName] || null;
  }

  setResponse(apiMessage: TrailMessage<T>): void {
    //
    const response = apiMessage[this.responseName];

    if (Array.isArray(response)) {
      this[this.responseName] = this.getModels().map(model => (this.responseType as any).fromDomain(model));
    } else {
      this[this.responseName] = (this.responseType as any).fromDomain(response);
    }
  }

  setResponseBy(response: T) {
    //
    if (Array.isArray(response)) {
      this[this.responseName] = this.getModels().map(model => (this.responseType as any).fromDomain(model));
    } else {
      this[this.responseName] = (this.responseType as any).fromDomain(response);
    }
  }

  getNotNullModel(): T {
    //
    const response = this.getNullableModel();

    if (!response) {
      throw new ApiException('TrailMessage', 'Response data is null');
    }
    return response;
  }

  getNullableModel(): T | null {
    //
    const response = this.getResponse();

    if (Array.isArray(response)) {
      throw new ApiException('TrailMessage', 'Response data is an array. Not the single model.');
    }
    return response;
  }

  getModels(): T[] {
    //
    const response = this.getResponse();

    if (!Array.isArray(response)) {
      throw new ApiException('TrailMessage', 'Response data is not an array');
    }
    // @ts-ignore
    return response;
  }

  [key: string]: any;
}

export default TrailMessage;
