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

import { LOCALES } from "../locale/locale";
import { AppSettings, ClientAppSettings } from "./app-settings";

export const clientAppSettings: ClientAppSettings = {
  version: 1,
  customization: {
    hasUrlShortener: false,
    externalViews: [],
    timezones: [],
    locale: LOCALES.EN_US
  },
  oauth: { status: "disabled" },
  clientTimeout: 1000
};

export const appSettings: AppSettings = {
  clientTimeout: 1000,
  customization: {
    timezones: [],
    locale: LOCALES.EN_US,
    externalViews: [],
    cssVariables: {}
  },
  oauth: { status: "disabled" },
  version: 0
};
