import { mount } from '@vue/test-utils';
import { beforeEach, afterEach, describe, expect, bench, expectTypeOf, it, vi } from 'vitest';
import { createTestingPinia } from '@pinia/testing';
import { setActivePinia, createPinia } from 'pinia';
import TheHeader from '../../../src/components/TheHeader.vue';
import { useUserStore } from '../../../src/stores/user';
import { nextTick } from 'process';

describe('TheHeader Component', () => {
  const getWrapper = () => {
    return mount(TheHeader, {
      global: {
        plugins: [createTestingPinia({ createSpy: vi.fn })],
      },
    });
  };
  let wrapper = getWrapper();
  let userStore = useUserStore();

  beforeEach(() => {
    wrapper = getWrapper();
    userStore = useUserStore();
  });

  afterEach(() => {
    wrapper.unmount();
  });

  it('Mounted', () => {
    expect(wrapper.vm).toBeTruthy();
  });

  describe('If logged in', () => {
    beforeEach(async () => {
      // @ts-ignore
      userStore.isLoggedIn = true;
      await wrapper.vm.$nextTick();
    });

    it('Runs logout on click', async () => {
      await wrapper.find('[data-test="logout"]').trigger('click');
      expect(userStore.logout).toHaveBeenCalledTimes(1);
    });

    it('Shows correct login and logout buttons', async () => {
      expect(wrapper.findAll('[data-test="logout"]').length).toBeGreaterThan(0);
      expect(wrapper.findAll('[data-test="login"]').length).toBe(0);
    });
  });
});
