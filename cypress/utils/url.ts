/*
 * Copyright 2017-2018 Allegro.pl
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
import { definitionUrlEncoders } from "../../src/common/view-definitions";
import { ViewDefinition4 } from "../../src/common/view-definitions/version-4/view-definition-4";
import { mockViewDefinition } from "../../src/common/view-definitions/version-4/view-definition-4.fixture";

const encoder = definitionUrlEncoders["4"];

const urlPrefix = "http://localhost:9090/#wiki/4/";

export default function makeUrl(options?: Partial<ViewDefinition4>): string {
  const definition = mockViewDefinition(options);
  const hash = encoder.encodeUrlHash(definition);
  return `${urlPrefix}${hash}`;
}
