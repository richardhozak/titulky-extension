;(function() {

	// stop listening to click events on body because it opens ad
	document.body.addEventListener("click", function (event) {
		event.stopPropagation()
	}, true)



	var search_icon = browser.extension.getURL("search.svg")

	var tablelogin = document.getElementById("tablelogin")
	if (tablelogin) {
		var loginform = tablelogin.parentNode
		tablelogin.remove()

		loginform.insertAdjacentHTML('afterbegin', `
			<div id="tablelogin-enh">
				<div id="tablelogin-enh-header">
					<p>LOGIN</p>
				</div>
				<span id="tablelogin-enh-login"><input placeholder="Jméno" type="text" name="Login"></span>
				<span id="tablelogin-enh-password"><input placeholder="Heslo" type="password" name="Password"></span>
				<div id="tablelogin-enh-bottom">
					<span id="remember-me-enh">
						<label>
							<input type="checkbox" name="foreverlog" value="1"> 
							<span>Přihlásit trvale</span>
						</label>
					</span>
					<span id="submit-enh">
						<input type="submit" name="prihlasit" value="Přihlásit se">
					</span>
				</div>
			</div>
			`)
	}


	var tablesearch = document.getElementById("tablesearch")
	if (tablesearch) {
		var tableform = tablesearch.parentNode
		tablesearch.remove()

		tableform.insertAdjacentHTML('afterbegin', `
			<div id="tablesearch-enh">
				<div id="tablesearch-enh-header">
					<p>HLEDAT</p>
				</div>
				<div id="tablesearch-enh-search">
					<input type="text" name="Fulltext" placeholder="Zadejte výraz">	
				</div>
			</div>
			`)
	}


	var tablelogon = document.getElementById("tablelogon")
	if (tablelogon) {
		/*get tablelogon parent for inserting container and remove old tablelogon*/
		var tablelogon_parent = tablelogon.parentNode
		tablelogon.remove()

		/*container html*/
		tablelogon_parent.insertAdjacentHTML('afterbegin', `
			<div id="tablelogon-enh-container">
				<div>
					<p>UŽIVATEL</p>
				</div>
			</div>
			`)

		/*move user name above user stars*/
		var user_cell = tablelogon.rows[0].cells[1]
		user_cell.insertBefore(user_cell.children[2], user_cell.children[0])

		/*add old tablelogon to new container*/
		document.getElementById("tablelogon-enh-container").appendChild(tablelogon)
	}

		//<button type="submit"><img src="${search_icon}"/></button>
		//<input onfocus="this.select()" id="searchTitulky" type="text" name="Fulltext" class="text_field ac_input" size="20" value="" autocomplete="off">
		//<input id="searchTitulky" onfocus="this.select()" type="text" value="" name="Fulltext" class="text_field_ac_input" autocomplete="off">		
})();