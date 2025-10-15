import { create } from 'zustand';

const useUserStore = create((set) => ({
  firstName: '',
  lastName: '',
  age:'',
  userGUID: 'baa235a0-cb59-4a95-9e0e-aa6692c28ded',

  setUserID: (userGUID) => set(() => ({ userGUID })),
  setFirstName: (firstName) => set(() => ({ firstName })),
  setLastName: (lastName) => set(() => ({ lastName })),
  setAge: (age) => set(() => ({ age })),
}));

export default useUserStore;
