import { mount } from "@vue/test-utils";
import {
  beforeEach,
  describe,
  expect,
  bench,
  expectTypeOf,
  it,
  vi,
} from "vitest";
import TheHeader from "@/components/HelloWorld.vue";

describe("TheHeader Component", () => {
  let wrapper = mount(TheHeader);

  beforeEach(() => {
    wrapper = mount(TheHeader);
  });

  it("Mounted", async () => {
    expect(wrapper.vm).toBeTruthy();
  });

  it("Contains links", async () => {
    const links = wrapper.findAll("a");
    expect(links.length).toBeGreaterThanOrEqual(1);
  });
});
