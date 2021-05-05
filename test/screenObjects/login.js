import { getTextOfElement } from '../helpers/utils';
import { DEFAULT_TIMEOUT } from '../helpers/e2eConstants';
import Base from './base';

class LoginScreen extends Base {
	constructor() {
		super('~test-Login');
	}


    get username() {
		return $('~test-Username');
	}

	get password() {
		return $('~test-Password');
	}

    get loginButton(){
        return $('~test-LOGIN');
    }

    get errorMessage() {
		return $('~test-Error message');
	}

	/**
	 * Sign in
	 *
	 * @param {object} userDetails
	 * @param {string} userDetails.username
	 * @param {string} userDetails.password
	 */
     signIn(userDetails = {}) {
		const { password, username } = userDetails;

		if (username && username !== '') {
			this.username.addValue(username);
		}
		if (password && password !== '') {
			this.password.addValue(password);
		}

		this.loginButton.click();
	}

    /**
	 * Get the text or the error message container
	 *
	 * @return {string}
	 */
	getErrorMessage() {
		this.errorMessage.waitForDisplayed({ timeout: DEFAULT_TIMEOUT });

		return getTextOfElement(this.errorMessage);
	}
}
export default new LoginScreen();