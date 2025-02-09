/*
 * Copyright 2015-2016 Imply Data, Inc.
 * Copyright 2017-2019 Allegro.pl
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { BaseImmutable, Property, PropertyType } from "immutable-class";

export type Special = "static" | "realtime";

export interface TimeTagValue {
  name: string;
  time?: Date;
  lastChecked?: Date;
  special?: Special;
}

export interface TimeTagJS {
  name: string;
  time?: Date | string;
  lastChecked?: Date | string;
  special?: Special;
}

export class TimeTag extends BaseImmutable<TimeTagValue, TimeTagJS> {

  static isTimeTag(candidate: any): candidate is TimeTag {
    return candidate instanceof TimeTag;
  }

  static PROPERTIES: Property[] = [
    { name: "name" },
    { name: "time", type: PropertyType.DATE, defaultValue: null },
    { name: "lastChecked", type: PropertyType.DATE, defaultValue: null },
    { name: "special", defaultValue: null }
  ];

  static fromJS(parameters: TimeTagJS): TimeTag {
    return new TimeTag(BaseImmutable.jsToValue(TimeTag.PROPERTIES, parameters));
  }

  public name: string;
  public time: Date;
  public lastChecked: Date;
  public special: Special;

  constructor(parameters: TimeTagValue) {
    super(parameters);
    if (this.time && !this.lastChecked) this.lastChecked = this.time;
  }

  public changeTime(time: Date, now: Date): TimeTag {
    var value = this.valueOf();
    value.time = time;
    value.lastChecked = now;
    return new TimeTag(value);
  }
}

BaseImmutable.finalize(TimeTag);
