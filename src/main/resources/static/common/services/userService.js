app.service("userService", [ 'httpService', 'URLS', "$rootScope", "$http",
	function(httpService, URLS, $rootScope, $http) {

		this.pingRequest = function() {
			return httpService.get(URLS.user + "/ping");
		};

		this.register = function(data) {
			return httpService.post(URLS.user + '/registration', data);
		};

		this.login = function(data) {
			return httpService.post(URLS.user + '/login', data);
		};

		this.logout = function() {
			return httpService.get(URLS.user + '/logout');
		};

		this.verifyOTP = function(data, otpType) {
			return httpService.post(URLS.user + '/verify_otp/' + otpType, data);
		};

		this.resendOTP = function(data, otpType, templateName) {
			return httpService.post(URLS.user + '/resend_otp/' + otpType + "/" + templateName, data);
		};

		this.changePassword = function(data) {
			return httpService.post(URLS.user + '/change_password', data);
		};

		this.getLoggedInUserDetail = function() {
			return httpService.get(URLS.user + '/get_user_details');
		};

		this.getUserDetailsById = function(userId) {
			return httpService.get(URLS.user + '/get_user_details_by_id/' + userId);
		};

		this.updateUserDetail = function(userObj) {
			return httpService.post(URLS.user + '/update_user_details', userObj);
		};

		this.verifyEmail = function(link) {
			return httpService.get(URLS.user + "/verify_email/" + link);
		};

		this.sendForgotPasswordLink = function(data) {
			return httpService.post(URLS.user + "/send_link", data);
		};

		this.resetPassword = function(data, link) {
			return httpService.post(URLS.user + "/reset_password/" + link, data);
		};
		this.saveOrUpdateBorrowerByCP = function(userObj) {
			return httpService.post(URLS.user + '/save_cp_borrower',userObj);
		};
		
		this.getCpUsers = function(userType) {
			return httpService.get(URLS.user + '/get_cp_users/' + userType);
		};
		
	} ]);