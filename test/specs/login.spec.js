import LoginScreen from '../screenObjects/login';
import InventoryListScreen from '../screenObjects/inventoryList';

import { restartApp } from '../helpers/utils';
import { LOGIN_USERS } from '../helpers/e2eConstants';


describe('Login', () => {
  // This will be executed for every test, log in and verify that the
  // correct screen is loaded
  beforeEach(() => {

    restartApp();
    LoginScreen.waitForIsShown();

  });

  it('should be able to login with a standard user', () => {

    LoginScreen.signIn(LOGIN_USERS.STANDARD);
    InventoryListScreen.waitForIsShown();

    expect(InventoryListScreen.isShown()).toEqual(true, 'Inventory List screen was not shown');

  });

  it('should show an error when no password is provided', () => {
    
    LoginScreen.signIn(LOGIN_USERS.NO_PASSWORD);

    expect(LoginScreen.getErrorMessage()).toContain('Password is required', 'The error message is not as expected');
  });
});