import { mount } from '@vue/test-utils';
import { beforeEach, afterEach, describe, expect, bench, expectTypeOf, it, vi } from 'vitest';
import { createTestingPinia } from '@pinia/testing';
import { setActivePinia, createPinia } from 'pinia';
import TheHeader from '../../../src/components/TheHeader.vue';
import { useUserStore } from '../../../src/stores/user';
import { nextTick } from 'process';

describe('TheHeader Component', () => {
  let wrapper: any;
  let userStore: any;

  beforeEach(() => {
    wrapper = mount(TheHeader, {
      global: {
        plugins: [createTestingPinia({ createSpy: vi.fn })],
      },
    });
    userStore = useUserStore();
  });

  afterEach(() => {
    wrapper.unmount();
  });

  it('Mounted', () => {
    expect(wrapper.vm).toBeTruthy();
  });

  describe('Logged out status', () => {
    it('Runs login on login click', async () => {
      await wrapper.find('[data-test="login"]').trigger('click');
      expect(userStore.login).toHaveBeenCalledTimes(1);
    });

    it('Shows logout button when logged in', async () => {
      userStore.isLoggedIn = true;
      await wrapper.vm.$nextTick();
      expect(wrapper.findAll('[data-test="logout"]').length).toBeGreaterThan(0);
      expect(wrapper.findAll('[data-test="login"]').length).toBe(0);
    });
  });
});
