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

import { latestTimeFilterDefinition } from "../../src/common/view-definitions/version-4/filter-definition.fixtures";
import makeUrl from "../utils/url";

describe("typescript", () => {
  beforeEach(() => {
    const url = makeUrl({
      series: [{ reference: "count" }],
      filters: [latestTimeFilterDefinition("time", 1, "P3D")]
    });
    cy.visit(url);
  });

  it("works", () => {
    cy.get(".filter:contains('Latest 3 days')").should("exist");
  });
});
