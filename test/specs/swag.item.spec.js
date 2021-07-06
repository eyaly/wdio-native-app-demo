import { restartApp } from '../helpers/utils';
import LoginScreen from '../screenObjects/login';
import InventoryListScreen from '../screenObjects/inventoryList';
//import InventoryItemScreen from '../screenObjects/inventoryItem';
import { LOGIN_USERS } from '../helpers/e2eConstants';

describe('Swag Item Page', () => {

	beforeEach(() => {
		// Restart the app before each session, only not for the first session
		restartApp();
		LoginScreen.waitForIsShown();
		LoginScreen.signIn(LOGIN_USERS.STANDARD);
		InventoryListScreen.waitForIsShown();
	});

	it('should show the details of the selected swag', () => {
		const swagItemLabel = 'Sauce Labs Backpack';

		//InventoryListScreen.openSwagItemDetails(swagItemLabel);
		//InventoryItemScreen.waitForIsShown();

		//expect(InventoryItemScreen.getSwagDescription()).toContain(swagItemLabel, 'The content of the selected swag item was not correct');
	});
});