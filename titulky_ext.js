;(function() {

	// stop listening to click events on body because it opens ad
	document.body.addEventListener("click", function (event) {
		event.stopPropagation()
	}, true)



	var search_icon = browser.extension.getURL("search.svg")

	var tablelogin = document.getElementById("tablelogin")
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

	var tablesearch = document.getElementById("tablesearch")
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
		
		//<button type="submit"><img src="${search_icon}"/></button>
		//<input onfocus="this.select()" id="searchTitulky" type="text" name="Fulltext" class="text_field ac_input" size="20" value="" autocomplete="off">
		//<input id="searchTitulky" onfocus="this.select()" type="text" value="" name="Fulltext" class="text_field_ac_input" autocomplete="off">		
})();