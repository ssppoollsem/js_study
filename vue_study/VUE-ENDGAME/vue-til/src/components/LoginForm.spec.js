// 1. id 인풋박스에 이메일을 입력했을 때 이메일이 맞는지 확인하는 로직
// 2. id, pw가 맞는 경우에 로그인 처리가 된다. 다음 페이지로 이동

import { shallowMount } from '@vue/test-utils';
// import Vue from 'vue';
import LoginForm from '@/components/LoginForm.vue';

describe('LoginForm.vue', () => {
  test('ID가 이메일형식이 아니면 경고 메시지가 출력된다.', () => {
    // const instance = new Vue(LoginForm).$mount();
    const wrapper = shallowMount(LoginForm, {
      data() {
        return {
          username: 'test',
        };
      },
    });
    const warningText = wrapper.find('.warning');

    // console.log(warningText.html());
    expect(warningText.exists()).toBeTruthy();
    // expect(idInput).toBe('');
    // console.log('인풋박스의 값 : ', idInput.element.value);
    // console.log(wrapper.vm.isUsernameValid);
  });

  test('ID가 PW가 입력되지 않으면 로그인 버튼이 비활성화 된다.', () => {
    const wrapper = shallowMount(LoginForm, {
      data() {
        return {
          username: 'a@a.com',
          password: '2',
        };
      },
    });

    const button = wrapper.find('.btn');
    expect(button.element.disabled).toBeTruthy();
  });
});
