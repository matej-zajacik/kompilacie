var data =
[
	"old_as_fuck.mp3", "Premiéra!",
	"2021_07_16.mp3", "Domrdané google mapy.",
	"2021_07_19.mp3", "Starý dobrý Horínek.",
	"2021_07_20.mp3", "Daňové a odvodové kokotiny.",
	"2021_07_21.mp3", "Prdy jak hromy.",
	"2021_07_22.mp3", "Floridská politická otázka.",
	"2021_07_23.mp3", "Prevarená zápletka a papučkové prípravy.",
	"2021_07_27.mp3", "Obžieračky jak štyri petelice.",
	"2021_08_04.mp3", "Na dovolenke sa zásadne woltí!",
	"2021_08_25.mp3", "Wolt predstavuje hotovostné platby.",
	"2021_09_20.mp3", "Kosatky a vyšetrenie.",
	"2021_09_21.mp3", "Jediní dvaja blbci, čo nič nechápu.",
	"2021_09_23.mp3", "Ujeby stovežaté.",
	"2021_09_26.mp3", "Alkoholizmus prekvitá.",
	"2021_09_27.mp3", "Robko je za kokota. Ako obvykle!",
	"2021_09_28.mp3", "Čačaný cukrovatový príspevok na FB.",
	"2021_09_30.mp3", "Klasický zmätok v depe.",
	"2021_10_02.mp3", "Robko je v milovanej prácií.",
	"2021_10_03.mp3", "Ivánka za závesom.",
	"2021_10_05.mp3", "Prieskum novej bublinky.",
	"2021_10_28.mp3", "Dobré ránečko, kokotenko!",
	"2021_10_30.mp3", "Foodpanda a šéfkuriérko.",
	"2021_10_31.mp3", "8 euro za 100-gramovú pizzu a Luckina diktatúra v Buržujovi.",
	"2021_11_01.mp3", "Prvá kompilka aj s hudbičtou.",
	"2021_11_02.mp3", "Grécky boh prdov.",
	"2021_11_03.mp3", "Jimmyho drezúra.",
	"2021_11_04.mp3", "Ajfónový etalón, alebo respektíve chlapcovi jebe jak osem klaksónov.",
	"2021_11_05.mp3", "Žiadne porno sa nekoná!",
	"2021_11_08.mp3", "Šošovička u Robka.",
	"2021_11_10.mp3", "Parkovania na kripla a hyperspam.",
	"2021_11_11.mp3", "Cukríček balí švestičky a ide pinuškať...",
	"2021_11_12.mp3", "Jedlé vrany a princ ružolíci.",
	"2021_11_16.mp3", "Pravé americké raňajky.",
	"2021_11_17.mp3", "Žiadny spánok! Podnikať a zarábať 24/7!",
	"2021_11_20.mp3", "Odborník na žido-africký hmyz a muchohitler.",
	"2021_11_23.mp3", "Tehotno-mužský LGBTQIA+ pozdrav.",
	"2021_11_26.mp3", "Debilní vodiči a divní kuriéri.",
	"2021_11_30.mp3", "Velechlpato lenivé paprčky pánka urodzenučkého.",
	"2021_12_04.mp3", "Vyšukávačky cez telefón s Deánou sa končia.",
	"2021_12_10.mp3", "Riťku-otvárajúci podmazík.",
	"2021_12_11.mp3", "Éra vacápu a vlnobitia ság a epopejí sa končí.",
	"2021_12_12.mp3", "Programátor tehotný muž.",
	"2021_12_13.mp3", "Jurko vs Zajko o dodržiavaní predpisov.",
	"2021_12_14.mp3", "Štyri mozgové bunky a ani tie o sebe nevedia.",
];



function go()
{
	var body = document.body;

	for (var i = 0; i < data.length; i += 2)
	{
		var div = document.createElement("div");
		div.setAttribute("id", "item");
		body.appendChild(div);

		var header = document.createElement("h1");
		header.innerHTML = "#" + ((i / 2) + 1);
		div.appendChild(header);
		var text = document.createElement("p");
		text.innerHTML = data[i + 1];
		div.appendChild(text);

		var audio = document.createElement("audio");
		audio.setAttribute("controls", "");
		var source = document.createElement("source");
		source.setAttribute("src", "data/" + data[i]);
		source.setAttribute("type", "audio/mpeg");
		audio.appendChild(source);
		div.appendChild(audio);
	}
}
