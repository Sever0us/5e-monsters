/* global addMonster */
/* global alignments */
"use strict";

// Custom
addMonster({ name: "CR 0",   cr: "0",   special: true, id: "cf33021b-ebd7-4db3-884d-0b48e8211ac3" });
addMonster({ name: "CR 1/8", cr: "1/8", special: true, id: "6107ed19-210b-47a4-a05d-3bf2489e6f4c" });
addMonster({ name: "CR 1/4", cr: "1/4", special: true, id: "ac37c9c6-a51b-4b7d-9c53-01a59a46965c" });
addMonster({ name: "CR 1/2", cr: "1/2", special: true, id: "614d0471-4a6c-4c62-be0e-7056eda3373e" });
addMonster({ name: "CR 1",   cr: "1",   special: true, id: "f42b1530-a466-45a4-95d7-e2ed05ed6a22" });
addMonster({ name: "CR 2",   cr: "2",   special: true, id: "687c8372-49bc-4fb1-923f-6de3018e5286" });
addMonster({ name: "CR 3",   cr: "3",   special: true, id: "129475b2-6192-4d3b-9df9-36f97549c04c" });
addMonster({ name: "CR 4",   cr: "4",   special: true, id: "06862566-630e-430d-a02d-842c743667de" });
addMonster({ name: "CR 5",   cr: "5",   special: true, id: "b3a8e10a-c632-4c1f-9c41-24d817b83eb0" });
addMonster({ name: "CR 6",   cr: "6",   special: true, id: "f8fa57c7-66d1-4992-9751-5750642c4528" });
addMonster({ name: "CR 7",   cr: "7",   special: true, id: "490d87ca-5730-4c55-8859-fe553aae2e04" });
addMonster({ name: "CR 8",   cr: "8",   special: true, id: "b952f971-e50f-4473-9e07-51e82c0ff288" });
addMonster({ name: "CR 9",   cr: "9",   special: true, id: "57f8b076-5b4f-4194-bae9-4fd195497d15" });
addMonster({ name: "CR 10",  cr: "10",  special: true, id: "80fbaf92-86c9-4ef5-8bee-df96a6b581b4" });
addMonster({ name: "CR 11",  cr: "11",  special: true, id: "5c6bf8cc-b83b-48d9-a719-100ae45cac57" });
addMonster({ name: "CR 12",  cr: "12",  special: true, id: "b43d7d4c-c573-4600-96ed-8d739dc8202a" });
addMonster({ name: "CR 13",  cr: "13",  special: true, id: "a24ebe53-0810-4874-99c7-fdfc2474cc3b" });
addMonster({ name: "CR 14",  cr: "14",  special: true, id: "3fc880d1-3810-4139-8c7c-62656e1787f2" });
addMonster({ name: "CR 15",  cr: "15",  special: true, id: "fa14831b-5804-48bf-944a-9373b69a9b4a" });
addMonster({ name: "CR 16",  cr: "16",  special: true, id: "25d596ed-710c-41ca-98ce-2489f08131ee" });
addMonster({ name: "CR 17",  cr: "17",  special: true, id: "73d7d8e0-d03b-461e-9882-8963bf1235c8" });
addMonster({ name: "CR 18",  cr: "18",  special: true, id: "3152a039-f64e-4794-bc88-51309dcbf52c" });
addMonster({ name: "CR 19",  cr: "19",  special: true, id: "024ca4e4-8bf1-49e7-a162-0bba83be1b2a" });
addMonster({ name: "CR 20",  cr: "20",  special: true, id: "660565b6-44cf-486e-9d70-52420a9a0ffe" });
addMonster({ name: "CR 21",  cr: "21",  special: true, id: "6e20c795-903a-4374-a8fd-69b92f71ae1d" });
addMonster({ name: "CR 22",  cr: "22",  special: true, id: "f5fccb83-9337-47b8-b12e-f9417e0e0b50" });
addMonster({ name: "CR 23",  cr: "23",  special: true, id: "2f56a2f1-068e-4467-83e5-559c7f57fd72" });
addMonster({ name: "CR 24",  cr: "24",  special: true, id: "566bea90-3430-4c6c-99c9-f17b37abf6c9" });
addMonster({ name: "CR 25",  cr: "25",  special: true, id: "56fc82df-ba8f-4c45-b64f-837e0370a341" });
addMonster({ name: "CR 26",  cr: "26",  special: true, id: "c2075aca-1de3-497b-94e4-cdb87393b1da" });
addMonster({ name: "CR 27",  cr: "27",  special: true, id: "c329588c-dd97-4edc-af8a-a65ed101a959" });
addMonster({ name: "CR 28",  cr: "28",  special: true, id: "6da69e50-4a20-4730-b84d-bdc5346a32df" });
addMonster({ name: "CR 29",  cr: "29",  special: true, id: "e2589f3b-62dd-4c38-906b-6b262058188a" });
addMonster({ name: "CR 30",  cr: "30",  special: true, id: "28e78bc1-ba2a-4e9d-8dc8-dfe6c7e4cbea" });

// Monster Manual

addMonster({
	name: "Aarakocra",
	size: "Medium", type: "Humanoid", tags: [ "Aarakocra" ],
	ac: 12, hp: 13, init: 2, cr: "1/4",
	alignment: alignments.ng,
	environments: [ "mountain", "planar" ],
	id: "0cd9a2e0-16bc-4c84-86c8-feb035c0b5d6",
});
addMonster({
	name: "Aboleth",
	size: "Large", type: "Aberration",
	ac: 17, hp: 135, init: -1, cr: "10",
	alignment: alignments.le,
	environments: [ "aquatic", "coast" ],
	legendary: true,
	lair: true,
	id: "43385a8d-759b-4f44-a712-d46069b8dd88",
});
addMonster({
	section: "Angels", name: "Deva",
	size: "Medium", type: "Celestial",
	ac: 17, hp: 136, init: 4, cr: "10",
	alignment: alignments.lg,
	environments: [ "planar" ],
	id: "c7e54573-9829-490d-9c8f-4874cb14ba3d",
});
addMonster({
	section: "Angels", name: "Planetar",
	size: "Large", type: "Celestial",
	ac: 19, hp: 200, init: 5, cr: "16",
	alignment: alignments.lg,
	environments: [ "planar" ],
	id: "7de4388c-e067-4308-b02d-84ecb296aa6e",
});
addMonster({
	section: "Angels", name: "Solar",
	size: "Large", type: "Celestial",
	ac: 21, hp: 241, init: 6, cr: "21",
	alignment: alignments.lg,
	environments: [ "planar" ],
	legendary: true,
	id: "6137fe73-562f-411b-8654-1e2d057a8da8",
});
addMonster({
	section: "Animated Objects", name: "Animated Armor",
	size: "Medium", type: "Construct",
	ac: 18, hp: 33, init: 0, cr: "1",
	environments: [ "dungeon", "ruins", "urban" ],
	id: "3c5a63ab-b94f-4451-aa2a-02545b381797",
});
addMonster({
	section: "Animated Objects", name: "Flying Sword",
	size: "Small", type: "Construct",
	ac: 17, hp: 17, init: 2, cr: "1/4",
	environments: [ "dungeon", "ruins", "urban" ],
	id: "35c699fb-a8d2-491f-9a73-206a61937297",
});
addMonster({
	section: "Animated Objects", name: "Rug of Smothering",
	size: "Large", type: "Construct",
	ac: 12, hp: 33, init: 2, cr: "2",
	environments: [ "dungeon", "ruins", "urban" ],
	id: "5defa2f6-bdb1-4439-8e3f-a0fe7ae78e31",
});
addMonster({
	name: "Ankheg",
	size: "Large", type: "Monstrosity",
	ac: "14, 11 while prone", hp: 39, init: 0, cr: "2",
	environments: [ "coast", "forest", "grassland", "underground" ],
	id: "789c33ef-c5f6-484d-8bfe-5c520e7d3f82",
});
addMonster({
	name: "Azer",
	size: "Medium", type: "Elemental",
	ac: 17, hp: 39, init: 1, cr: "2",
	alignment: alignments.ln,
	environments: [ "underground", "planar" ],
	id: "1180c9bd-d7e3-48d7-8087-79a936ab01d3",
});
addMonster({
	name: "Banshee",
	size: "Medium", type: "Undead",
	ac: 12, hp: 58, init: 2, cr: "4",
	alignment: alignments.ce,
	environments: [ "dungeon", "forest", "ruins", "swamp" ],
	id: "59a79db3-22c9-457f-bcb0-990013e4057a",
});
addMonster({
	name: "Basilisk",
	size: "Medium", type: "Monstrosity",
	ac: 15, hp: 52, init: -1, cr: "3",
	environments: [ "arctic", "cave", "coast", "desert", "dungeon", "forest", "grassland", "mountain", "ruins", "swamp", "underground" ],
	id: "fca1066d-9c2c-4745-972c-a4e19376bab7",
});
addMonster({
	name: "Behir",
	size: "Huge", type: "Monstrosity",
	ac: 17, hp: 168, init: 3, cr: "11",
	alignment: alignments.ne,
	environments: [ "cave", "mountain", "underground" ],
	id: "05a1b5f9-d2de-44ba-b292-b7b63fca6826",
});
addMonster({
	section: "Beholders", name: "Beholder",
	size: "Large", type: "Aberration",
	ac: 18, hp: 180, init: 2, cr: "13",
	alignment: alignments.le,
	environments: [ "cave", "dungeon", "underground" ],
	legendary: true,
	lair: false,
	id: "a97f037f-85d9-47a4-8eae-814eb5176810",
});
addMonster({
	section: "Beholders", name: "Beholder (in lair)",
	size: "Large", type: "Aberration",
	ac: 18, hp: 180, init: 2, cr: "14",
	alignment: alignments.le,
	environments: [ "cave", "dungeon", "underground" ],
	legendary: true,
	lair: true,
	id: "095cd054-da20-44b7-a511-b22c42a5b201",
});
addMonster({
	section: "Beholders", name: "Death Tyrant",
	size: "Large", type: "Undead",
	ac: 19, hp: 187, init: 2, cr: "14",
	alignment: alignments.le,
	environments: [ "cave", "dungeon", "underground" ],
	legendary: true,
	lair: false,
	id: "47c0a532-6d34-4cf9-9d89-ffc4b8575898",
});
addMonster({
	section: "Beholders", name: "Death Tyrant (in lair)",
	size: "Large", type: "Undead",
	ac: 19, hp: 187, init: 2, cr: "15",
	alignment: alignments.le,
	environments: [ "cave", "dungeon", "underground" ],
	legendary: true,
	lair: true,
	id: "efc8bf04-0f28-4c53-80fd-38e4f6404231",
});
addMonster({
	section: "Beholders", name: "Spectator",
	size: "Medium", type: "Aberration",
	ac: 14, hp: 39, init: 2, cr: "3",
	alignment: alignments.ln,
	environments: [ "cave", "dungeon", "ruins", "underground", "urban" ],
	id: "aadb1915-c3d4-4349-b9f2-5b7a10ab3f3d",
});
addMonster({
	section: "Blights", name: "Needle Blight",
	size: "Medium", type: "Plant",
	ac: 12, hp: 11, init: 1, cr: "1/4",
	alignment: alignments.ne,
	environments: [ "forest", "grassland", "swamp" ],
	id: "87ae63b6-4be9-43d7-a096-5556018c5999",
});
addMonster({
	section: "Blights", name: "Twig Blight",
	size: "Small", type: "Plant",
	ac: 13, hp: 4, init: 1, cr: "1/8",
	alignment: alignments.ne,
	environments: [ "forest", "grassland", "swamp" ],
	id: "811f1a20-d074-4520-a8de-1e37bc53a00c",
});
addMonster({
	section: "Blights", name: "Vine Blight",
	size: "Medium", type: "Plant",
	ac: 12, hp: 26, init: -1, cr: "1/2",
	alignment: alignments.ne,
	environments: [ "forest", "grassland", "swamp" ],
	id: "590ac204-e32e-4a8e-b4ea-1f7ca2c39851",
});
addMonster({
	section: "Bugbears", name: "Bugbear",
	size: "Medium", type: "Humanoid", tags: [ "Goblinoid" ],
	ac: 16, hp: 27, init: 2, cr: "1",
	alignment: alignments.ce,
	environments: [ "cave", "dungeon", "forest", "mountain", "ruins", "urban" ],
	id: "2dad5420-04bb-4921-9857-34700a52f413",
});
addMonster({
	section: "Bugbears", name: "Bugbear Chief",
	size: "Medium", type: "Humanoid", tags: [ "Goblinoid" ],
	ac: 17, hp: 65, init: 2, cr: "3",
	alignment: alignments.ce,
	environments: [ "cave", "dungeon", "forest", "mountain", "ruins", "urban" ],
	id: "bab41d17-f80f-4b5f-abf9-792b03bb98ef",
});
addMonster({
	name: "Bulette",
	size: "Large", type: "Monstrosity",
	ac: 17, hp: 94, init: 0, cr: "5",
	environments: [ "cave", "desert", "grassland", "mountain", "underground" ],
	id: "6b6b6245-cc31-4950-8ec4-91e06b56a282",
});
addMonster({
	name: "Bullywug",
	size: "Medium", type: "Humanoid", tags: [ "Bullywug" ],
	ac: 15, hp: 11, init: 1, cr: "1/4",
	alignment: alignments.ne,
	environments: [ "coast", "swamp" ],
	id: "c8328817-b3e9-4c24-984b-f278678bc3a4",
});
addMonster({
	name: "Cambion",
	size: "Medium", type: "Fiend",
	ac: 19, hp: 82, init: 4, cr: "5",
	alignment: alignments.any_evil,
	environments: [ "dungeon", "urban", "planar" ],
	id: "1f3ad1ff-6606-4f75-ae2a-02293de88198",
});
addMonster({
	name: "Carrion Crawler",
	size: "Large", type: "Monstrosity",
	ac: 13, hp: 51, init: 1, cr: "2",
	environments: [ "cave", "dungeon", "underground" ],
	id: "9c9180b5-4e30-424b-9823-a8375131ffe7",
});
addMonster({
	name: "Centaur",
	size: "Large", type: "Monstrosity",
	ac: 12, hp: 45, init: 2, cr: "2",
	alignment: alignments.ng,
	environments: [ "coast", "desert", "grassland" ],
	id: "a9212953-cb55-4b5d-80ff-c3703fc5cb0e",
});
addMonster({
	name: "Chimera",
	size: "Large", type: "Monstrosity",
	ac: 14, hp: 114, init: 0, cr: "6",
	alignment: alignments.ce,
	environments: [ "mountain" ],
	id: "a11e72bd-d81b-4826-901d-d2101c287b1e",
});
addMonster({
	name: "Chuul",
	size: "Large", type: "Aberration",
	ac: 16, hp: 93, init: 0, cr: "4",
	alignment: alignments.ce,
	environments: [ "aquatic", "coast" ],
	id: "c20e65d5-8e5b-4f3b-845e-fb12a8342260",
});
addMonster({
	name: "Cloaker",
	size: "Large", type: "Aberration",
	ac: 14, hp: 78, init: 2, cr: "8",
	alignment: alignments.cn,
	environments: [ "cave", "dungeon", "underground" ],
	id: "3624bf90-c532-4e42-b97e-66cf22005a1a",
});
addMonster({
	name: "Cockatrice",
	size: "Small", type: "Monstrosity",
	ac: 11, hp: 27, init: 1, cr: "1/2",
	environments: [ "forest", "grassland", "swamp" ],
	id: "6782e851-fe66-4e6f-abd2-2de17c0f4db9",
});
addMonster({
	name: "Couatl",
	size: "Medium", type: "Celestial",
	ac: 19, hp: 97, init: 5, cr: "4",
	alignment: alignments.lg,
	environments: [ "planar" ],
	id: "37abaf7a-e840-4ea1-b34f-334f13a6a7ca",
});
addMonster({
	name: "Crawling Claw",
	size: "Tiny", type: "Undead",
	ac: 12, hp: 2, init: 2, cr: "0",
	alignment: alignments.ne,
	environments: [ "dungeon", "ruins", "swamp" ],
	id: "2a0c5d92-fca1-4a81-a702-3c45f230b5fe",
});
addMonster({
	name: "Cyclops",
	size: "Huge", type: "Giant",
	ac: 14, hp: 138, init: 0, cr: "6",
	alignment: alignments.cn,
	environments: [ "cave", "coast", "grassland", "mountain", "ruins", "swamp" ],
	id: "1c299dc6-ea10-4314-bc9a-0f40fe4dbfab",
});
addMonster({
	name: "Darkmantle",
	size: "Small", type: "Monstrosity",
	ac: 11, hp: 22, init: 1, cr: "1/2",
	environments: [ "cave", "underground" ],
	id: "f113bf67-3a28-494e-b74b-d495c2ca4d8c",
});
addMonster({
	name: "Death Knight",
	size: "Medium", type: "Undead",
	ac: 20, hp: 180, init: 0, cr: "17",
	alignment: alignments.ce,
	environments: [ "arctic", "cave", "coast", "desert", "dungeon", "forest", "grassland", "mountain", "ruins", "swamp", "underground", "urban" ],
	id: "e4c765b3-445f-475b-853d-d27b6d4d12fe",
});
addMonster({
	name: "Demilich",
	size: "Tiny", type: "Undead",
	ac: 20, hp: 80, init: 5, cr: "18",
	alignment: alignments.ne,
	environments: [ "dungeon" ],
	legendary: true,
	lair: false,
	id: "7678ccea-6973-4647-afa0-a0f1957392df",
});
addMonster({
	name: "Demilich (in lair)",
	size: "Tiny", type: "Undead",
	ac: 20, hp: 80, init: 5, cr: "20",
	alignment: alignments.ne,
	environments: [ "dungeon" ],
	legendary: true,
	lair: true,
	id: "ccb1f0eb-3037-40f3-bbe0-1f63f89ba71c",
});
addMonster({
	name: "Demilich (Acererak)",
	size: "Tiny", type: "Undead",
	ac: 20, hp: 80, init: 5, cr: "21",
	alignment: alignments.ne,
	environments: [ "dungeon" ],
	legendary: true,
	lair: false,
	id: "44738bcb-dfb3-4ce0-bf2e-836df2601fdd",
});
addMonster({
	name: "Demilich (Acererak in lair)",
	size: "Tiny", type: "Undead",
	ac: 20, hp: 80, init: 5, cr: "23",
	alignment: alignments.ne,
	environments: [ "dungeon" ],
	legendary: true,
	lair: true,
	id: "d315f181-effc-499e-947b-caf6eeec524a",
});
addMonster({
	section: "Demons", name: "Balor",
	size: "Huge", type: "Fiend", tags: [ "Demon" ],
	ac: 19, hp: 262, init: 2, cr: "19",
	alignment: alignments.ce,
	environments: [ "dungeon", "planar" ],
	id: "e99e9430-d387-4c3f-8168-cfd6257174a1",
});
addMonster({
	section: "Demons", name: "Barlgura",
	size: "Large", type: "Fiend", tags: [ "Demon" ],
	ac: 15, hp: 68, init: 2, cr: "5",
	alignment: alignments.ce,
	environments: [ "dungeon", "planar" ],
	id: "b8148f95-9e1c-45b9-aabf-78d11ad0ee25",
});
addMonster({
	section: "Demons", name: "Chasme",
	size: "Large", type: "Fiend", tags: [ "Demon" ],
	ac: 15, hp: 84, init: 2, cr: "6",
	alignment: alignments.ce,
	environments: [ "dungeon", "planar" ],
	id: "b2d9646e-cd3b-4045-803f-aedf158216a2",
});
addMonster({
	section: "Demons", name: "Dretch",
	size: "Small", type: "Fiend", tags: [ "Demon" ],
	ac: 11, hp: 18, init: 0, cr: "1/4",
	alignment: alignments.ce,
	environments: [ "dungeon", "planar" ],
	id: "84860c36-652d-44df-bd00-905303a4e589",
});
addMonster({
	section: "Demons", name: "Glabrezu",
	size: "Large", type: "Fiend", tags: [ "Demon" ],
	ac: 17, hp: 157, init: 2, cr: "9",
	alignment: alignments.ce,
	environments: [ "dungeon", "planar" ],
	id: "681eb77f-9e46-4d7c-b96b-c850f1037dd0",
});
addMonster({
	section: "Demons", name: "Goristro",
	size: "Huge", type: "Fiend", tags: [ "Demon" ],
	ac: 19, hp: 310, init: 0, cr: "17",
	alignment: alignments.ce,
	environments: [ "dungeon", "planar" ],
	id: "776873f4-290b-4bf8-8d55-1d9b978791b0",
});
addMonster({
	section: "Demons", name: "Hezrou",
	size: "Large", type: "Fiend", tags: [ "Demon" ],
	ac: 16, hp: 136, init: 3, cr: "8",
	alignment: alignments.ce,
	environments: [ "dungeon", "planar" ],
	id: "ba7bbb9e-2a12-4e4b-b90c-0d8e90f0898d",
});
addMonster({
	section: "Demons", name: "Manes",
	size: "Small", type: "Fiend", tags: [ "Demon" ],
	ac: 9, hp: 9, init: -1, cr: "1/8",
	alignment: alignments.ce,
	environments: [ "dungeon", "planar" ],
	id: "22a8a7af-8674-4308-9c7c-da4d02965093",
});
addMonster({
	section: "Demons", name: "Marilith",
	size: "Large", type: "Fiend", tags: [ "Demon" ],
	ac: 18, hp: 189, init: 5, cr: "16",
	alignment: alignments.ce,
	environments: [ "dungeon", "planar" ],
	id: "8e3f174d-372b-40b5-ac07-c5e4651d410c",
});
addMonster({
	section: "Demons", name: "Nalfeshnee",
	size: "Large", type: "Fiend", tags: [ "Demon" ],
	ac: 18, hp: 184, init: 0, cr: "13",
	alignment: alignments.ce,
	environments: [ "dungeon", "planar" ],
	id: "fea2cf64-fbc7-45e9-b901-ede53d696bf3",
});
addMonster({
	section: "Demons", name: "Quasit",
	size: "Tiny", type: "Fiend", tags: [ "Demon", "Shapechanger" ],
	ac: 13, hp: 7, init: 3, cr: "1",
	alignment: alignments.ce,
	environments: [ "dungeon", "planar" ],
	id: "05541b29-3f73-45f4-974c-6aabd25b4708",
});
addMonster({
	section: "Demons", name: "Shadow Demon",
	size: "Medium", type: "Fiend", tags: [ "Demon" ],
	ac: 13, hp: 66, init: 3, cr: "4",
	alignment: alignments.ce,
	environments: [ "dungeon", "planar" ],
	id: "d356934b-d78b-49bf-9ce0-b9fb9946eb64",
});
addMonster({
	section: "Demons", name: "Vrock",
	size: "Large", type: "Fiend", tags: [ "Demon" ],
	ac: 15, hp: 104, init: 2, cr: "6",
	alignment: alignments.ce,
	environments: [ "dungeon", "planar" ],
	id: "993c1b2c-ea24-45c5-9c1d-a862d1f6b440",
});
addMonster({
	section: "Demons", name: "Yochlol",
	size: "Medium", type: "Fiend", tags: [ "Demon", "Shapechanger" ],
	ac: 15, hp: 136, init: 2, cr: "10",
	alignment: alignments.ce,
	environments: [ "dungeon", "planar" ],
	id: "b6a29400-8010-4d35-b429-b65eb33de9c3",
});
addMonster({
	section: "Devils", name: "Barbed Devil",
	size: "Medium", type: "Fiend", tags: [ "Devil" ],
	ac: 15, hp: 110, init: 3, cr: "5",
	alignment: alignments.le,
	environments: [ "dungeon", "planar" ],
	id: "f9fe17c3-2688-4434-98fc-1321b8e1d48d",
});
addMonster({
	section: "Devils", name: "Bearded Devil",
	size: "Medium", type: "Fiend", tags: [ "Devil" ],
	ac: 13, hp: 52, init: 2, cr: "3",
	alignment: alignments.le,
	environments: [ "dungeon", "planar" ],
	id: "f32f1817-8310-41f0-8a83-0d39a5d464c3",
});
addMonster({
	section: "Devils", name: "Bone Devil",
	size: "Large", type: "Fiend", tags: [ "Devil" ],
	ac: 19, hp: 142, init: 3, cr: "9",
	alignment: alignments.le,
	environments: [ "dungeon", "planar" ],
	id: "d6d8860b-6c94-4056-b02d-d4161206d24c",
});
addMonster({
	section: "Devils", name: "Chain Devil",
	size: "Medium", type: "Fiend", tags: [ "Devil" ],
	ac: 16, hp: 85, init: 2, cr: "8",
	alignment: alignments.le,
	environments: [ "dungeon", "planar" ],
	id: "9c4a2dce-bc31-4644-88d1-a590d19c8b47",
});
addMonster({
	section: "Devils", name: "Erinyes",
	size: "Medium", type: "Fiend", tags: [ "Devil" ],
	ac: 18, hp: 153, init: 3, cr: "12",
	alignment: alignments.le,
	environments: [ "dungeon", "planar" ],
	id: "17e723aa-5268-4ed7-8c54-113a4e6fb76c",
});
addMonster({
	section: "Devils", name: "Horned Devil",
	size: "Large", type: "Fiend", tags: [ "Devil" ],
	ac: 18, hp: 178, init: 3, cr: "11",
	alignment: alignments.le,
	environments: [ "dungeon", "planar" ],
	id: "50a88400-dd98-40b7-a03a-4cbedd5730b8",
});
addMonster({
	section: "Devils", name: "Ice Devil",
	size: "Large", type: "Fiend", tags: [ "Devil" ],
	ac: 18, hp: 180, init: 2, cr: "14",
	alignment: alignments.le,
	environments: [ "dungeon", "planar" ],
	id: "ccc0b0de-f4e8-418d-b354-dbf6968413ee",
});
addMonster({
	section: "Devils", name: "Imp",
	size: "Tiny", type: "Fiend", tags: [ "Demon", "Shapechanger" ],
	ac: 13, hp: 10, init: 3, cr: "1",
	alignment: alignments.le,
	environments: [ "dungeon", "planar" ],
	id: "c211c5fc-f71a-4e11-8c8b-71a6ae470eaa",
});
addMonster({
	section: "Devils", name: "Lemure",
	size: "Medium", type: "Fiend", tags: [ "Devil" ],
	ac: 7, hp: 13, init: -3, cr: "0",
	alignment: alignments.le,
	environments: [ "dungeon", "planar" ],
	id: "a423f6af-82f8-4716-9a32-03e6c21679b1",
});
addMonster({
	section: "Devils", name: "Pit Fiend",
	size: "Large", type: "Fiend", tags: [ "Devil" ],
	ac: 19, hp: 300, init: 2, cr: "20",
	alignment: alignments.le,
	environments: [ "dungeon", "planar" ],
	id: "14742ff6-ed38-44f5-8e11-4ac74b20ba02",
});
addMonster({
	section: "Devils", name: "Spined Devil",
	size: "Small", type: "Fiend", tags: [ "Devil" ],
	ac: 13, hp: 22, init: 2, cr: "2",
	alignment: alignments.le,
	environments: [ "dungeon", "planar" ],
	id: "0cf05453-f134-4a9a-8884-256965c0576b",
});
addMonster({
	section: "Dinosaurs", name: "Allosaurus",
	size: "Large", type: "Beast",
	ac: 13, hp: 51, init: 1, cr: "2",
	environments: [ "coast", "grassland", "swamp" ],
	id: "4dfdcf3d-5bdc-4d4d-a55c-6a9149d97079",
});
addMonster({
	section: "Dinosaurs", name: "Ankylosaurus",
	size: "Huge", type: "Beast",
	ac: 15, hp: 68, init: 0, cr: "3",
	environments: [ "grassland" ],
	id: "935a62a6-3538-4ea8-a06c-adddef096e56",
});
addMonster({
	section: "Dinosaurs", name: "Plesiosaurus",
	size: "Large", type: "Beast",
	ac: 13, hp: 68, init: 2, cr: "2",
	environments: [ "aquatic" ],
	id: "633bf055-b509-4f7f-b4ca-5c14bbfeb919",
});
addMonster({
	section: "Dinosaurs", name: "Pteranodon",
	size: "Medium", type: "Beast",
	ac: 13, hp: 13, init: 2, cr: "1/4",
	environments: [ "mountain" ],
	id: "2bbec9af-7f96-40ed-84c8-9f5c98ae38c3",
});
addMonster({
	section: "Dinosaurs", name: "Triceratops",
	size: "Huge", type: "Beast",
	ac: 13, hp: 95, init: -1, cr: "5",
	environments: [ "grassland", "mountain" ],
	id: "75aa0080-9b95-4693-abfd-dc077ba0073a",
});
addMonster({
	section: "Dinosaurs", name: "Tyrannosaurus Rex",
	size: "Huge", type: "Beast",
	ac: 13, hp: 136, init: 0, cr: "8",
	environments: [ "grassland" ],
	id: "49fb470b-4186-49a4-9794-05dfcdc8fe09",
});
addMonster({
	name: "Displacer Beast",
	size: "Large", type: "Monstrosity",
	ac: 13, hp: 85, init: 2, cr: "3",
	alignment: alignments.le,
	environments: [ "forest", "grassland" ],
	id: "6169f0f9-4bc6-4453-8d20-a7ceed20dbbd",
});
addMonster({
	name: "Doppelganger",
	size: "Medium", type: "Monstrosity", tags: [ "Shapechanger" ],
	ac: 14, hp: 52, init: 4, cr: "3",
	alignment: alignments.n,
	environments: [ "dungeon", "ruins", "urban" ],
	id: "738ff802-57e5-4f73-89cb-5def2b527fc0",
});
addMonster({
	section: "Dracolich", name: "Adult Blue Dracolich",
	size: "Huge", type: "Undead",
	ac: 19, hp: 225, init: 0, cr: "17",
	alignment: alignments.le,
	environments: [ "desert", "dungeon" ],
	legendary: true,
	lair: true,
	id: "437ddd59-2aa8-489f-bc2e-e9845a935947",
});
addMonster({
	section: "Dragon, Shadow", name: "Young Red Shadow Dragon",
	size: "Large", type: "Dragon",
	ac: 18, hp: 178, init: 0, cr: "13",
	alignment: alignments.ce,
	environments: [ "planar" ],
	id: "ca105b5a-d47c-467a-b48f-bd25a9a33de4",
});
addMonster({
	section: "Dragons", name: "Adult Black Dragon",
	size: "Huge", type: "Dragon",
	ac: 19, hp: 195, init: 2, cr: "14",
	alignment: alignments.ce,
	environments: [ "swamp" ],
	legendary: true,
	lair: true,
	id: "925ae71b-869a-4067-aed6-803e50dc3e41",
});
addMonster({
	section: "Dragons", name: "Adult Blue Dragon",
	size: "Huge", type: "Dragon",
	ac: 19, hp: 225, init: 0, cr: "16",
	alignment: alignments.le,
	environments: [ "desert" ],
	legendary: true,
	lair: true,
	id: "0a70230e-18d8-49e3-898a-49e740acb4a2",
});
addMonster({
	section: "Dragons", name: "Adult Brass Dragon",
	size: "Huge", type: "Dragon",
	ac: 18, hp: 172, init: 0, cr: "13",
	alignment: alignments.cg,
	environments: [ "cave", "underground" ],
	legendary: true,
	lair: true,
	id: "02616673-2113-4e70-82fc-729b766d3c58",
});
addMonster({
	section: "Dragons", name: "Adult Bronze Dragon",
	size: "Huge", type: "Dragon",
	ac: 19, hp: 212, init: 0, cr: "15",
	alignment: alignments.lg,
	environments: [ "coast" ],
	legendary: true,
	lair: true,
	id: "ac41ad48-6631-413e-8e68-6e29696c8f35",
});
addMonster({
	section: "Dragons", name: "Adult Copper Dragon",
	size: "Huge", type: "Dragon",
	ac: 18, hp: 184, init: 1, cr: "14",
	alignment: alignments.cg,
	environments: [ "cave", "desert", "grassland" ],
	legendary: true,
	lair: true,
	id: "43984f24-324e-4656-ae7a-aeaaa14d74be",
});
addMonster({
	section: "Dragons", name: "Adult Gold Dragon",
	size: "Huge", type: "Dragon",
	ac: 19, hp: 256, init: 2, cr: "17",
	alignment: alignments.lg,
	environments: [ "mountain", "ruins" ],
	legendary: true,
	lair: true,
	id: "99872957-920d-4007-a66b-0f5922ba584d",
});
addMonster({
	section: "Dragons", name: "Adult Green Dragon",
	size: "Huge", type: "Dragon",
	ac: 19, hp: 207, init: 1, cr: "15",
	alignment: alignments.le,
	environments: [ "forest" ],
	legendary: true,
	lair: true,
	id: "1182dfb4-3b70-4ce0-a41c-c5ff1ca6ad21",
});
addMonster({
	section: "Dragons", name: "Adult Red Dragon",
	size: "Huge", type: "Dragon",
	ac: 19, hp: 256, init: 0, cr: "17",
	alignment: alignments.ce,
	environments: [ "mountain" ],
	legendary: true,
	lair: true,
	id: "a27291de-91c5-4b8e-9ffe-5055e90cc6cd",
});
addMonster({
	section: "Dragons", name: "Adult Silver Dragon",
	size: "Huge", type: "Dragon",
	ac: 19, hp: 243, init: 0, cr: "16",
	alignment: alignments.lg,
	environments: [ "arctic", "mountain" ],
	legendary: true,
	lair: true,
	id: "4002e3ba-63b1-48a8-87d1-044a319cb02d",
});
addMonster({
	section: "Dragons", name: "Adult White Dragon",
	size: "Huge", type: "Dragon",
	ac: 18, hp: 200, init: 0, cr: "13",
	alignment: alignments.ce,
	environments: [ "arctic", "cave", "underground" ],
	legendary: true,
	lair: true,
	id: "4218c74b-27c2-45be-abde-e23ad4223061",
});
addMonster({
	section: "Dragons", name: "Ancient Black Dragon",
	size: "Gargantuan", type: "Dragon",
	ac: 22, hp: 367, init: 2, cr: "21",
	alignment: alignments.ce,
	environments: [ "swamp" ],
	legendary: true,
	lair: true,
	id: "19a2039e-4cc1-4181-96d2-5f33d5d75764",
});
addMonster({
	section: "Dragons", name: "Ancient Blue Dragon",
	size: "Gargantuan", type: "Dragon",
	ac: 22, hp: 481, init: 0, cr: "23",
	alignment: alignments.le,
	environments: [ "desert" ],
	legendary: true,
	lair: true,
	id: "3e861d52-a964-4c84-8ffc-44a814e3070b",
});
addMonster({
	section: "Dragons", name: "Ancient Brass Dragon",
	size: "Gargantuan", type: "Dragon",
	ac: 20, hp: 297, init: 0, cr: "20",
	alignment: alignments.cg,
	environments: [ "cave", "underground" ],
	legendary: true,
	lair: true,
	id: "75ff17b1-4f33-49ca-ae07-80088c028ea5",
});
addMonster({
	section: "Dragons", name: "Ancient Bronze Dragon",
	size: "Gargantuan", type: "Dragon",
	ac: 22, hp: 444, init: 0, cr: "22",
	alignment: alignments.lg,
	environments: [ "coast" ],
	legendary: true,
	lair: true,
	id: "49924bb6-804f-4150-870b-b14b85716129",
});
addMonster({
	section: "Dragons", name: "Ancient Copper Dragon",
	size: "Gargantuan", type: "Dragon",
	ac: 21, hp: 350, init: 1, cr: "21",
	alignment: alignments.cg,
	environments: [ "cave", "desert", "grassland" ],
	legendary: true,
	lair: true,
	id: "e06dae63-02d4-41c4-b910-0831ca111514",
});
addMonster({
	section: "Dragons", name: "Ancient Gold Dragon",
	size: "Gargantuan", type: "Dragon",
	ac: 22, hp: 546, init: 2, cr: "24",
	alignment: alignments.lg,
	environments: [ "mountain", "ruins" ],
	legendary: true,
	lair: true,
	id: "d830724d-8d58-4464-af65-3befceb878bf",
});
addMonster({
	section: "Dragons", name: "Ancient Green Dragon",
	size: "Gargantuan", type: "Dragon",
	ac: 21, hp: 385, init: 1, cr: "22",
	alignment: alignments.le,
	environments: [ "forest" ],
	legendary: true,
	lair: true,
	id: "67f50578-6e21-4e73-9d47-5a34d5d340c4",
});
addMonster({
	section: "Dragons", name: "Ancient Red Dragon",
	size: "Gargantuan", type: "Dragon",
	ac: 22, hp: 546, init: 0, cr: "24",
	alignment: alignments.ce,
	environments: [ "mountain" ],
	legendary: true,
	lair: true,
	id: "fa6112d9-803c-4c9e-b995-41cb04b8872d",
});
addMonster({
	section: "Dragons", name: "Ancient Silver Dragon",
	size: "Gargantuan", type: "Dragon",
	ac: 22, hp: 487, init: 0, cr: "23",
	alignment: alignments.lg,
	environments: [ "arctic", "mountain" ],
	legendary: true,
	lair: true,
	id: "867fd8db-72d8-4bc7-8d8a-272afe0c42c6",
});
addMonster({
	section: "Dragons", name: "Ancient White Dragon",
	size: "Gargantuan", type: "Dragon",
	ac: 20, hp: 333, init: 0, cr: "20",
	alignment: alignments.ce,
	environments: [ "arctic", "cave", "underground" ],
	legendary: true,
	lair: true,
	id: "44702dbb-036c-4eee-923e-565cf17e77ac",
});
addMonster({
	section: "Dragons", name: "Black Dragon Wyrmling",
	size: "Medium", type: "Dragon",
	ac: 17, hp: 33, init: 2, cr: "2",
	alignment: alignments.ce,
	environments: [ "swamp" ],
	id: "db95bd5e-565b-44fa-8bdb-0732ce4d3b67",
});
addMonster({
	section: "Dragons", name: "Blue Dragon Wyrmling",
	size: "Medium", type: "Dragon",
	ac: 17, hp: 52, init: 0, cr: "3",
	alignment: alignments.le,
	environments: [ "desert" ],
	id: "15c821b4-abed-42f4-bbcd-2035edec5aad",
});
addMonster({
	section: "Dragons", name: "Brass Dragon Wyrmling",
	size: "Medium", type: "Dragon",
	ac: 16, hp: 16, init: 0, cr: "1",
	alignment: alignments.cg,
	environments: [ "cave", "underground" ],
	id: "03e32c50-a660-4314-b701-393153a80fcd",
});
addMonster({
	section: "Dragons", name: "Bronze Dragon Wyrmling",
	size: "Medium", type: "Dragon",
	ac: 17, hp: 32, init: 0, cr: "2",
	alignment: alignments.lg,
	environments: [ "coast" ],
	id: "1fac16f9-7b5f-4d8f-85b9-fcecacd16d2a",
});
addMonster({
	section: "Dragons", name: "Copper Dragon Wyrmling",
	size: "Medium", type: "Dragon",
	ac: 16, hp: 22, init: 1, cr: "1",
	alignment: alignments.cg,
	environments: [ "cave", "desert", "grassland" ],
	id: "b226d74a-b4ea-48cf-b510-48e6de7fc765",
});
addMonster({
	section: "Dragons", name: "Gold Dragon Wyrmling",
	size: "Medium", type: "Dragon",
	ac: 17, hp: 60, init: 2, cr: "3",
	alignment: alignments.lg,
	environments: [ "mountain", "ruins" ],
	id: "524618b1-0d0d-4e12-bcf3-cb8d725c9ebc",
});
addMonster({
	section: "Dragons", name: "Green Dragon Wyrmling",
	size: "Medium", type: "Dragon",
	ac: 17, hp: 38, init: 1, cr: "2",
	alignment: alignments.le,
	environments: [ "forest" ],
	id: "41eb895f-32b5-4389-8e99-145545851edc",
});
addMonster({
	section: "Dragons", name: "Red Dragon Wyrmling",
	size: "Medium", type: "Dragon",
	ac: 17, hp: 75, init: 0, cr: "4",
	alignment: alignments.ce,
	environments: [ "mountain" ],
	id: "e5d8b994-96ce-48e8-9cf2-5453b0d84959",
});
addMonster({
	section: "Dragons", name: "Silver Dragon Wyrmling",
	size: "Medium", type: "Dragon",
	ac: 17, hp: 45, init: 0, cr: "2",
	alignment: alignments.lg,
	environments: [ "arctic", "mountain" ],
	id: "def8e263-2dae-4ec5-b3b1-6150011ec485",
});
addMonster({
	section: "Dragons", name: "White Dragon Wyrmling",
	size: "Medium", type: "Dragon",
	ac: 16, hp: 32, init: 0, cr: "2",
	alignment: alignments.ce,
	environments: [ "arctic", "cave", "underground" ],
	id: "c00182cb-df6f-42da-9193-e67eb119083c",
});
addMonster({
	section: "Dragons", name: "Young Black Dragon",
	size: "Large", type: "Dragon",
	ac: 18, hp: 127, init: 2, cr: "7",
	alignment: alignments.ce,
	environments: [ "swamp" ],
	id: "e1758345-1f6a-440c-bb64-d86ba7e96bfa",
});
addMonster({
	section: "Dragons", name: "Young Blue Dragon",
	size: "Large", type: "Dragon",
	ac: 18, hp: 152, init: 0, cr: "9",
	alignment: alignments.le,
	environments: [ "desert" ],
	id: "5b5912af-1b34-45f7-adae-388645d0a500",
});
addMonster({
	section: "Dragons", name: "Young Brass Dragon",
	size: "Large", type: "Dragon",
	ac: 17, hp: 110, init: 0, cr: "6",
	alignment: alignments.cg,
	environments: [ "cave", "underground" ],
	id: "04cd3926-8097-4020-87c1-74610125a529",
});
addMonster({
	section: "Dragons", name: "Young Bronze Dragon",
	size: "Large", type: "Dragon",
	ac: 18, hp: 142, init: 0, cr: "8",
	alignment: alignments.lg,
	environments: [ "coast" ],
	id: "994dda89-f812-4e4d-8996-40e877539101",
});
addMonster({
	section: "Dragons", name: "Young Copper Dragon",
	size: "Large", type: "Dragon",
	ac: 17, hp: 119, init: 1, cr: "7",
	alignment: alignments.cg,
	environments: [ "cave", "desert", "grassland" ],
	id: "aec4cd35-e36f-41fd-a4a4-c19ab3d08218",
});
addMonster({
	section: "Dragons", name: "Young Gold Dragon",
	size: "Large", type: "Dragon",
	ac: 18, hp: 178, init: 2, cr: "10",
	alignment: alignments.lg,
	environments: [ "mountain", "ruins" ],
	id: "f858036f-efe8-4f7f-af82-cfa836594474",
});
addMonster({
	section: "Dragons", name: "Young Green Dragon",
	size: "Large", type: "Dragon",
	ac: 18, hp: 136, init: 1, cr: "8",
	alignment: alignments.le,
	environments: [ "forest" ],
	id: "d935c7ad-b765-4e72-8274-adb16a62aade",
});
addMonster({
	section: "Dragons", name: "Young Red Dragon",
	size: "Large", type: "Dragon",
	ac: 18, hp: 178, init: 0, cr: "10",
	alignment: alignments.ce,
	environments: [ "mountain" ],
	id: "3f6ed5da-bf09-4f65-bfd2-b012ebb01648",
});
addMonster({
	section: "Dragons", name: "Young Silver Dragon",
	size: "Large", type: "Dragon",
	ac: 18, hp: 168, init: 0, cr: "9",
	alignment: alignments.lg,
	environments: [ "arctic", "mountain" ],
	id: "6c8026b5-6b8b-4b06-a3a8-78a4822d791f",
});
addMonster({
	section: "Dragons", name: "Young White Dragon",
	size: "Large", type: "Dragon",
	ac: 17, hp: 133, init: 0, cr: "6",
	alignment: alignments.ce,
	environments: [ "arctic", "cave", "underground" ],
	id: "3797b48d-5d9e-4e6b-ae4c-43fa4bfcf086",
});
addMonster({
	name: "Dragon Turtle",
	size: "Gargantuan", type: "Dragon",
	ac: 20, hp: 341, init: 0, cr: "17",
	alignment: alignments.n,
	environments: [ "aquatic" ],
	id: "5a1662ec-9630-404e-8f37-7c79e9f9f450",
});
addMonster({
	name: "Drider",
	size: "Large", type: "Monstrosity",
	ac: 19, hp: 123, init: 3, cr: "6",
	alignment: alignments.ce,
	environments: [ "dungeon", "underground" ],
	id: "cd17abab-5062-4ab5-9a1c-df53d3962a87",
});
addMonster({
	name: "Dryad",
	size: "Medium", type: "Fey",
	ac: "11 (16 with barkskin)", hp: 22, init: 1, cr: "1",
	alignment: alignments.n,
	environments: [ "forest" ],
	id: "ca145277-a157-4591-af02-3d5a3cfe3368",
});
addMonster({
	name: "Duergar",
	size: "Medium", type: "Humanoid", tags: [ "Dwarf" ],
	ac: 16, hp: 26, init: 0, cr: "1",
	alignment: alignments.le,
	environments: [ "dungeon", "underground" ],
	id: "3dabeab2-dbcb-4915-a633-797f17fe5f4d",
});
addMonster({
	section: "Elementals", name: "Air Elemental",
	size: "Large", type: "Elemental",
	ac: 15, hp: 90, init: 5, cr: "5",
	alignment: alignments.n,
	environments: [ "arctic", "cave", "coast", "desert", "dungeon", "forest", "grassland", "mountain", "ruins", "swamp", "underground", "planar" ],
	id: "071f1203-f6e6-4fcf-928c-b9cdeb256b2b",
});
addMonster({
	section: "Elementals", name: "Earth Elemental",
	size: "Large", type: "Elemental",
	ac: 17, hp: 126, init: -1, cr: "5",
	alignment: alignments.n,
	environments: [ "arctic", "cave", "coast", "desert", "dungeon", "forest", "grassland", "mountain", "ruins", "swamp", "underground", "planar" ],
	id: "e5f96c20-3f6c-4374-90e8-89a3952f2562",
});
addMonster({
	section: "Elementals", name: "Fire Elemental",
	size: "Large", type: "Elemental",
	ac: 13, hp: 102, init: 3, cr: "5",
	alignment: alignments.n,
	environments: [ "cave", "coast", "desert", "dungeon", "grassland", "mountain", "ruins", "underground", "planar" ],
	id: "4630fbab-b0ca-41dc-9e42-3a69a737ff0e",
});
addMonster({
	section: "Elementals", name: "Water Elemental",
	size: "Large", type: "Elemental",
	ac: 14, hp: 114, init: 2, cr: "5",
	alignment: alignments.n,
	environments: [ "aquatic", "arctic", "cave", "coast", "dungeon", "forest", "grassland", "mountain", "ruins", "swamp", "underground", "planar" ],
	id: "ef655c7f-1f59-4b56-8b52-3e96895cb20f",
});
addMonster({
	section: "Elves: Drow", name: "Drow",
	size: "Medium", type: "Humanoid", tags: [ "Elf" ],
	ac: 15, hp: 13, init: 2, cr: "1/4",
	alignment: alignments.ne,
	environments: [ "dungeon", "underground", "urban" ],
	id: "e28ee68c-d06b-411c-9ed5-423a151d6697",
});
addMonster({
	section: "Elves: Drow", name: "Drow Elite Warrior",
	size: "Medium", type: "Humanoid", tags: [ "Elf" ],
	ac: 18, hp: 71, init: 4, cr: "5",
	alignment: alignments.ne,
	environments: [ "dungeon", "underground", "urban" ],
	id: "197e15f8-c5f7-41ac-a47a-a92144e2bfac",
});
addMonster({
	section: "Elves: Drow", name: "Drow Mage",
	size: "Medium", type: "Humanoid", tags: [ "Elf" ],
	ac: "12 (15 with mage armor)", hp: 45, init: 2, cr: "7",
	alignment: alignments.ne,
	environments: [ "dungeon", "underground", "urban" ],
	id: "a2a7ae70-c46a-48b8-9a5f-d3b1c82b91b5",
});
addMonster({
	section: "Elves: Drow", name: "Drow Priestess of Lolth",
	size: "Medium", type: "Humanoid", tags: [ "Elf" ],
	ac: 16, hp: 71, init: 2, cr: "8",
	alignment: alignments.ne,
	environments: [ "dungeon", "underground", "urban" ],
	id: "525d2a5a-4fba-4183-926e-4cca39164da4",
});
addMonster({
	name: "Empyrean",
	size: "Huge", type: "Celestial", tags: [ "Titan" ],
	ac: 22, hp: 313, init: 5, cr: "23",
	alignment: { cg: true, ne: true, text: "chaotic good (75%) or neutral evil (25%)" },
	environments: [ "planar" ],
	legendary: true,
	id: "607299fd-9bfc-41da-983e-47a821eb35a9",
});
addMonster({
	name: "Ettercap",
	size: "Medium", type: "Monstrosity",
	ac: 13, hp: 44, init: 2, cr: "2",
	alignment: alignments.ne,
	environments: [ "cave", "dungeon", "forest", "ruins", "swamp", "underground" ],
	id: "1ae109e6-763a-46cd-b643-396c0e83da84",
});
addMonster({
	name: "Ettin",
	size: "Large", type: "Giant",
	ac: 12, hp: 85, init: -1, cr: "4",
	alignment: alignments.ce,
	environments: [ "cave", "grassland", "mountain", "swamp" ],
	id: "2d0d5297-dd18-4bd7-85e9-0759e4a6bb8b",
});
addMonster({
	name: "Faerie Dragon (red)",
	size: "Tiny", type: "Dragon",
	ac: 15, hp: 14, init: 5, cr: "1",
	alignment: alignments.cg,
	environments: [ "forest", "grassland", "mountain", "ruins", "swamp" ],
	id: "8e6e36dd-dabc-4fd9-ba4d-261b26baeb81",
});
addMonster({
	name: "Faerie Dragon (orange)",
	size: "Tiny", type: "Dragon",
	ac: 15, hp: 14, init: 5, cr: "1",
	alignment: alignments.cg,
	environments: [ "forest", "grassland", "mountain", "ruins", "swamp" ],
	id: "009bfc30-93b0-48f5-a403-269c8ace67bf",
});
addMonster({
	name: "Faerie Dragon (yellow)",
	size: "Tiny", type: "Dragon",
	ac: 15, hp: 14, init: 5, cr: "1",
	alignment: alignments.cg,
	environments: [ "forest", "grassland", "mountain", "ruins", "swamp" ],
	id: "83602f7b-43f6-4d20-ab7c-c2dd52990826",
});
addMonster({
	name: "Faerie Dragon (green)",
	size: "Tiny", type: "Dragon",
	ac: 15, hp: 14, init: 5, cr: "2",
	alignment: alignments.cg,
	environments: [ "forest", "grassland", "mountain", "ruins", "swamp" ],
	id: "2f69eb5e-7c8c-4f6b-97f3-aab4ee7c5501",
});
addMonster({
	name: "Faerie Dragon (blue)",
	size: "Tiny", type: "Dragon",
	ac: 15, hp: 14, init: 5, cr: "2",
	alignment: alignments.cg,
	environments: [ "forest", "grassland", "mountain", "ruins", "swamp" ],
	id: "6a982eda-d984-429f-b6e0-8b3c28e2914f",
});
addMonster({
	name: "Faerie Dragon (indigo)",
	size: "Tiny", type: "Dragon",
	ac: 15, hp: 14, init: 5, cr: "2",
	alignment: alignments.cg,
	environments: [ "forest", "grassland", "mountain", "ruins", "swamp" ],
	id: "fd9e0821-7b20-4184-b292-e50d154b7f7b",
});
addMonster({
	name: "Faerie Dragon (violet)",
	size: "Tiny", type: "Dragon",
	ac: 15, hp: 14, init: 5, cr: "2",
	alignment: alignments.cg,
	environments: [ "forest", "grassland", "mountain", "ruins", "swamp" ],
	id: "d5edc918-ee9d-46dd-a780-fd6203e75228",
});
addMonster({
	name: "Flameskull",
	size: "Tiny", type: "Undead",
	ac: 13, hp: 40, init: 3, cr: "4",
	alignment: alignments.ne,
	environments: [ "dungeon", "ruins" ],
	id: "4665dbb1-cbc4-433a-a0df-0b6477d6f4fa",
});
addMonster({
	name: "Flumph",
	size: "Small", type: "Aberration",
	ac: 12, hp: 7, init: 2, cr: "1/8",
	alignment: alignments.lg,
	environments: [ "dungeon", "underground" ],
	id: "14d204ca-04d2-44d4-a644-2e1e9e2d9091",
});
addMonster({
	name: "Fomorian",
	size: "Huge", type: "Giant",
	ac: 14, hp: 149, init: 0, cr: "8",
	alignment: alignments.ce,
	environments: [ "cave", "underground" ],
	id: "fdb52704-4bb5-4909-b55e-0f8ee199f877",
});
addMonster({
	name: "Galeb Duhr",
	size: "Medium", type: "Elemental",
	ac: 16, hp: 85, init: 2, cr: "6",
	alignment: alignments.n,
	environments: [ "cave", "dungeon", "mountain", "underground", "planar" ],
	id: "1e738fdf-524b-4127-b5b9-916758a8b52a",
});
addMonster({
	section: "Fungi", name: "Gas Spore",
	size: "Large", type: "Plant",
	ac: 5, hp: 1, init: -5, cr: "1/2",
	environments: [ "cave", "dungeon", "underground" ],
	id: "5ad9d340-d07d-48bf-8938-2d304730746d",
});
addMonster({
	section: "Fungi", name: "Shrieker",
	size: "Medium", type: "Plant",
	ac: 5, hp: 13, init: -5, cr: "0",
	environments: [ "cave", "dungeon", "swamp" ],
	id: "3aa695ea-6f7e-49bb-aef4-3153347c0fcc",
});
addMonster({
	section: "Fungi", name: "Violet Fungus",
	size: "Medium", type: "Plant",
	ac: 5, hp: 18, init: -5, cr: "1/4",
	environments: [ "cave", "dungeon", "underground" ],
	id: "667b4af5-1335-4f33-bd19-34d947603dc9",
});
addMonster({
	name: "Gargoyle",
	size: "Medium", type: "Elemental",
	ac: 15, hp: 52, init: 0, cr: "2",
	alignment: alignments.ce,
	environments: [ "dungeon", "urban" ],
	id: "625ff3cf-c836-498f-bb9b-de25adb1c26d",
});
addMonster({
	section: "Genies", name: "Dao",
	size: "Large", type: "Elemental",
	ac: 18, hp: 187, init: 1, cr: "11",
	alignment: alignments.ne,
	environments: [ "cave", "dungeon", "mountain", "underground", "planar" ],
	id: "c3b998ee-064e-4034-aaac-8e3d8dcb4eae",
});
addMonster({
	section: "Genies", name: "Djinni",
	size: "Large", type: "Elemental",
	ac: 17, hp: 161, init: 2, cr: "11",
	alignment: alignments.cg,
	environments: [ "arctic", "coast", "dungeon", "grassland", "planar" ],
	id: "bd3dbe66-519f-4aaf-96a0-4058b8910af6",
});
addMonster({
	section: "Genies", name: "Efreeti",
	size: "Large", type: "Elemental",
	ac: 17, hp: 200, init: 1, cr: "11",
	alignment: alignments.le,
	environments: [ "desert", "dungeon", "mountain", "planar" ],
	id: "56fac8a2-3ef7-4ed6-bf94-df506191ed77",
});
addMonster({
	section: "Genies", name: "Marid",
	size: "Large", type: "Elemental",
	ac: 17, hp: 229, init: 1, cr: "11",
	alignment: alignments.cn,
	environments: [ "aquatic", "coast", "dungeon", "swamp", "planar" ],
	id: "b30c6226-cb44-4070-ba78-12bfcf3e8d9e",
});
addMonster({
	name: "Ghost",
	size: "Medium", type: "Undead",
	ac: 11, hp: 45, init: 1, cr: "4",
	alignment: alignments.any,
	environments: [ "cave", "dungeon", "ruins", "swamp", "underground", "urban" ],
	id: "c15c8f1e-5e6c-4011-a994-683fbb0b18dd",
});
addMonster({
	section: "Ghouls", name: "Ghast",
	size: "Medium", type: "Undead",
	ac: 13, hp: 36, init: 3, cr: "2",
	alignment: alignments.ce,
	environments: [ "arctic", "cave", "coast", "desert", "dungeon", "forest", "grassland", "mountain", "ruins", "swamp", "underground", "urban" ],
	id: "73113f3b-87d9-46a3-90a8-38ab64ba2dab",
});

addMonster({
	section: "Ghouls", name: "Ghoul",
	size: "Medium", type: "Undead",
	ac: 12, hp: 22, init: 2, cr: "1",
	alignment: alignments.ce,
	environments: [ "arctic", "cave", "coast", "desert", "dungeon", "forest", "grassland", "mountain", "ruins", "swamp", "underground", "urban" ],
	id: "369e60c6-5792-4623-8e11-36951e652011",
});
addMonster({
	section: "Giants", name: "Cloud Giant",
	size: "Huge", type: "Giant",
	ac: 14, hp: 200, init: 0, cr: "9",
	alignment: { ng: true, ne: true, text: "neutral good (50%) or neutral evil (50%)" },
	environments: [ "mountain", "planar" ],
	id: "ddb5a9fe-4323-479f-86b1-79d810a0ff69",
});
addMonster({
	section: "Giants", name: "Fire Giant",
	size: "Huge", type: "Giant",
	ac: 18, hp: 162, init: -1, cr: "9",
	alignment: alignments.le,
	environments: [ "mountain", "planar" ],
	id: "cc07acfb-a623-43ec-8c23-70a0385eb481",
});
addMonster({
	section: "Giants", name: "Frost Giant",
	size: "Huge", type: "Giant",
	ac: 15, hp: 138, init: -1, cr: "8",
	alignment: alignments.ne,
	environments: [ "arctic", "mountain", "planar" ],
	id: "8a2720eb-fb5c-4a79-8560-b3d1443d5e76",
});
addMonster({
	section: "Giants", name: "Hill Giant",
	size: "Huge", type: "Giant",
	ac: 13, hp: 105, init: -1, cr: "5",
	alignment: alignments.ce,
	environments: [ "arctic", "coast", "grassland" ],
	id: "c7296867-6041-418d-b255-b675639cfc2c",
});
addMonster({
	section: "Giants", name: "Stone Giant",
	size: "Huge", type: "Giant",
	ac: 17, hp: 126, init: 2, cr: "7",
	alignment: alignments.n,
	environments: [ "cave", "mountain", "underground" ],
	id: "c29cb38d-3b6a-459a-8643-843d256ab995",
});
addMonster({
	section: "Giants", name: "Storm Giant",
	size: "Huge", type: "Giant",
	ac: 16, hp: 230, init: 2, cr: "13",
	alignment: alignments.cg,
	environments: [ "arctic", "coast", "desert", "mountain", "planar" ],
	id: "ce9784dc-ee70-416b-955d-c554089ec044",
});
addMonster({
	name: "Gibbering Mouther",
	size: "Medium", type: "Aberration",
	ac: 9, hp: 67, init: -1, cr: "2",
	alignment: alignments.n,
	environments: [ "cave", "dungeon", "underground", "planar" ],
	id: "3394673a-e802-409a-b0b2-8d3f972a86fc",
});
addMonster({
	section: "Gith", name: "Githyanki Knight",
	size: "Medium", type: "Humanoid", tags: [ "Gith" ],
	ac: 18, hp: 91, init: 2, cr: "8",
	alignment: alignments.le,
	environments: [ "xswamp", "planar" ],
	id: "54fd43f7-d101-461d-b6db-e64f095eed84",
});
addMonster({
	section: "Gith", name: "Githyanki Warrior",
	size: "Medium", type: "Humanoid", tags: [ "Gith" ],
	ac: 17, hp: 49, init: 2, cr: "3",
	alignment: alignments.le,
	environments: [ "planar" ],
	id: "a3e7690f-8fc3-4a63-ba8c-75edbdbd755b",
});
addMonster({
	section: "Gith", name: "Githzerai Monk",
	size: "Medium", type: "Humanoid", tags: [ "Gith" ],
	ac: 14, hp: 38, init: 2, cr: "2",
	alignment: alignments.ln,
	environments: [ "planar" ],
	id: "09632ffa-87af-47aa-b906-1e343f742ab5",
});
addMonster({
	section: "Gith", name: "Githzerai Zerth",
	size: "Medium", type: "Humanoid", tags: [ "Gith" ],
	ac: 17, hp: 84, init: 4, cr: "6",
	alignment: alignments.ln,
	environments: [ "planar" ],
	id: "3058ccdb-7705-4545-8b7d-a09345c676dc",
});
addMonster({
	section: "Gnolls", name: "Gnoll",
	size: "Medium", type: "Humanoid", tags: [ "Gnoll" ],
	ac: 15, hp: 22, init: 1, cr: "1/2",
	alignment: alignments.ce,
	environments: [ "arctic", "cave", "coast", "desert", "dungeon", "forest", "grassland", "mountain", "ruins", "swamp", "urban" ],
	id: "07256557-e839-43d0-b84b-e91f3e7866fc",
});
addMonster({
	section: "Gnolls", name: "Gnoll Fang of Yeenoghu",
	size: "Medium", type: "Fiend", tags: [ "Gnoll" ],
	ac: 14, hp: 65, init: 2, cr: "4",
	alignment: alignments.ce,
	environments: [ "arctic", "cave", "coast", "desert", "dungeon", "forest", "grassland", "mountain", "ruins", "swamp", "urban" ],
	id: "e6e7eb98-e83c-4f36-ab56-35f50982c411",
});
addMonster({
	section: "Gnolls", name: "Gnoll Pack Lord",
	size: "Medium", type: "Humanoid", tags: [ "Gnoll" ],
	ac: 15, hp: 49, init: 2, cr: "2",
	alignment: alignments.ce,
	environments: [ "arctic", "cave", "coast", "desert", "dungeon", "forest", "grassland", "mountain", "ruins", "swamp", "urban" ],
	id: "a07c63be-7fd9-441a-bbe0-469a0e732bbb",
});
addMonster({
	section: "Gnome, Deep (Svirfneblin)", name: "Deep Gnome (Svirfneblin)",
	size: "Small", type: "Humanoid", tags: [ "Gnome" ],
	ac: 15, hp: 16, init: 2, cr: "1/2",
	alignment: alignments.ng,
	environments: [ "cave", "dungeon", "underground", "planar" ],
	id: "dd4a1c24-730a-467c-ac2f-8417fac0fdf8",
});
addMonster({
	section: "Goblins", name: "Goblin",
	size: "Small", type: "Humanoid", tags: [ "Goblinoid" ],
	ac: 15, hp: 7, init: 2, cr: "1/4",
	alignment: alignments.ne,
	environments: [ "cave", "dungeon", "forest", "grassland", "mountain", "ruins", "urban" ],
	id: "9cf6c94e-b019-47e1-a746-ab4d02f684a9",
});
addMonster({
	section: "Goblins", name: "Goblin Boss",
	size: "Small", type: "Humanoid", tags: [ "Goblinoid" ],
	ac: 17, hp: 21, init: 2, cr: "1",
	alignment: alignments.ne,
	environments: [ "cave", "dungeon", "forest", "grassland", "mountain", "ruins", "urban" ],
	id: "0ad711a0-1b8b-418c-836e-b95ff9abb066",
});
addMonster({
	section: "Golems", name: "Clay Golem",
	size: "Large", type: "Construct",
	ac: 14, hp: 133, init: -1, cr: "9",
	environments: [ "dungeon", "ruins", "urban" ],
	id: "7272ad74-80e0-4170-a9af-8566bc84d236",
});
addMonster({
	section: "Golems", name: "Flesh Golem",
	size: "Medium", type: "Construct",
	ac: 9, hp: 93, init: -1, cr: "5",
	environments: [ "dungeon", "ruins" ],
	id: "1a0097d3-c91a-4515-89cf-a63c4badc355",
});
addMonster({
	section: "Golems", name: "Iron Golem",
	size: "Large", type: "Construct",
	ac: 20, hp: 210, init: -1, cr: "16",
	environments: [ "dungeon", "ruins", "urban" ],
	id: "d9f13daf-d1b1-490c-87a7-33e8d28bb4ee",
});
addMonster({
	section: "Golems", name: "Stone Golem",
	size: "Large", type: "Construct",
	ac: 17, hp: 178, init: -1, cr: "10",
	environments: [ "dungeon", "ruins", "urban" ],
	id: "235ac710-1418-4bda-b0e5-3ded0ccbe1f9",
});
addMonster({
	name: "Gorgon",
	size: "Large", type: "Monstrosity",
	ac: 19, hp: 114, init: 0, cr: "5",
	environments: [ "mountain", "ruins" ],
	id: "7065db5f-03fc-4fc5-964d-8bdf5d47f701",
});
addMonster({
	name: "Grell",
	size: "Medium", type: "Aberration",
	ac: 12, hp: 55, init: 2, cr: "3",
	alignment: alignments.ne,
	environments: [ "dungeon", "underground" ],
	id: "58efcfe3-54aa-4680-82c0-4ac9cf417bcd",
});
addMonster({
	section: "Grick", name: "Grick",
	size: "Medium", type: "Monstrosity",
	ac: 14, hp: 27, init: 2, cr: "2",
	alignment: alignments.n,
	environments: [ "cave", "dungeon", "underground" ],
	id: "9ab9a61b-5298-44e9-8950-167e4a4e9c98",
});
addMonster({
	section: "Grick", name: "Grick Alpha",
	size: "Large", type: "Monstrosity",
	ac: 18, hp: 75, init: 3, cr: "7",
	alignment: alignments.n,
	environments: [ "cave", "dungeon", "underground" ],
	id: "a227bfa9-bdbe-4a27-9e06-f4e65de57280",
});
addMonster({
	name: "Griffon",
	size: "Large", type: "Monstrosity",
	ac: 12, hp: 59, init: 2, cr: "2",
	environments: [ "arctic", "coast", "grassland", "mountain" ],
	id: "9084361f-6e4a-47ee-9e58-341f346278b2",
});
addMonster({
	name: "Grimlock",
	size: "Medium", type: "Humanoid", tags: [ "Grimlock" ],
	ac: 11, hp: 11, init: 1, cr: "1/4",
	alignment: alignments.ne,
	environments: [ "cave", "dungeon", "underground" ],
	id: "f3f05353-e662-4b51-bdf2-19e3be7769eb",
});
addMonster({
	section: "Hags", name: "Green Hag",
	size: "Medium", type: "Fey",
	ac: 17, hp: 82, init: 1, cr: "3",
	alignment: alignments.ne,
	environments: [ "forest", "swamp" ],
	id: "9447b8b2-f96c-4607-b210-966d201d6da6",
});
addMonster({
	section: "Hags", name: "Green Hag (coven)",
	size: "Medium", type: "Fey",
	ac: 17, hp: 82, init: 1, cr: "5",
	alignment: alignments.ne,
	environments: [ "forest", "swamp" ],
	id: "af9dbb65-ebf7-468e-9746-131a66a9facb",
});
addMonster({
	section: "Hags", name: "Night Hag",
	size: "Medium", type: "Fiend",
	ac: 17, hp: 112, init: 2, cr: "5",
	alignment: alignments.ne,
	environments: [ "underground", "planar" ],
	id: "c419ea32-d524-462f-b65d-e88641fa177c",
});
addMonster({
	section: "Hags", name: "Night Hag (coven)",
	size: "Medium", type: "Fiend",
	ac: 17, hp: 112, init: 2, cr: "7",
	alignment: alignments.ne,
	environments: [ "underground", "planar" ],
	id: "ff6fee89-50c4-4bbb-a2b0-07646c55b4e2",
});
addMonster({
	section: "Hags", name: "Sea Hag",
	size: "Medium", type: "Fey",
	ac: 14, hp: 52, init: 1, cr: "2",
	alignment: alignments.ce,
	environments: [ "aquatic", "coast", "underground" ],
	id: "6e15161a-e1b2-4a0c-94b0-db75d2e6ccb3",
});
addMonster({
	section: "Hags", name: "Sea Hag (coven)",
	size: "Medium", type: "Fey",
	ac: 14, hp: 52, init: 1, cr: "4",
	alignment: alignments.ce,
	environments: [ "aquatic", "coast", "underground" ],
	id: "0f788005-3e4c-47b0-8ffe-8266c424d825",
});
addMonster({
	section: "Half-Dragon", name: "Half-Red Dragon Veteran",
	size: "Medium", type: "Humanoid", tags: [ "Human" ],
	ac: 18, hp: 65, init: 1, cr: "5",
	alignment: alignments.any,
	environments: [ "arctic", "coast", "desert", "grassland", "mountain", "urban" ],
	id: "1a52d02f-8c55-41cb-80c5-48127774767b",
});
addMonster({
	name: "Harpy",
	size: "Medium", type: "Monstrosity",
	ac: 11, hp: 38, init: 1, cr: "1",
	alignment: alignments.ce,
	environments: [ "coast", "forest", "mountain" ],
	id: "3279999e-4dd9-4149-8ce5-f0867c108d30",
});
addMonster({
	name: "Hell Hound",
	size: "Medium", type: "Fiend",
	ac: 15, hp: 45, init: 1, cr: "3",
	alignment: alignments.le,
	environments: [ "dungeon", "urban", "planar" ],
	id: "5545c172-5478-4ac0-8db5-7b2c8e90394c",
});
addMonster({
	name: "Helmed Horror",
	size: "Medium", type: "Construct",
	ac: 20, hp: 60, init: 1, cr: "4",
	alignment: alignments.n,
	environments: [ "dungeon", "ruins", "urban" ],
	id: "82ec416b-64ff-4738-b308-9cd44ef5957d",
});
addMonster({
	section: "Hobgoblins", name: "Hobgoblin",
	size: "Medium", type: "Humanoid", tags: [ "Goblinoid" ],
	ac: 18, hp: 11, init: 1, cr: "1/2",
	alignment: alignments.le,
	environments: [ "arctic", "coast", "grassland", "mountain", "urban" ],
	id: "127e4789-95e3-48e4-8937-7d85ccb3bea0",
});
addMonster({
	section: "Hobgoblins", name: "Hobgoblin Captain",
	size: "Medium", type: "Humanoid", tags: [ "Goblinoid" ],
	ac: 17, hp: 39, init: 2, cr: "3",
	alignment: alignments.le,
	environments: [ "arctic", "coast", "grassland", "mountain", "urban" ],
	id: "5341cb95-c090-4295-ba1d-83d978988a10",
});
addMonster({
	section: "Hobgoblins", name: "Hobgoblin Warlord",
	size: "Medium", type: "Humanoid", tags: [ "Goblinoid" ],
	ac: 20, hp: 97, init: 2, cr: "6",
	alignment: alignments.le,
	environments: [ "arctic", "coast", "grassland", "mountain", "urban" ],
	id: "3a5c21f3-f610-47ec-ba99-8ea6ceb9a5a2",
});
addMonster({
	name: "Hippogriff",
	size: "Large", type: "Monstrosity",
	ac: 11, hp: 19, init: 1, cr: "1",
	environments: [ "mountain" ],
	id: "5d506ff9-4a90-460e-82e4-68bdf0bac7cf",
});
addMonster({
	name: "Homunculus",
	size: "Tiny", type: "Construct",
	ac: 13, hp: 5, init: 2, cr: "0",
	alignment: alignments.n,
	environments: [ "dungeon", "urban" ],
	id: "733da9a7-a197-4be8-b8f0-00e492801eec",
});
addMonster({
	name: "Hook Horror",
	size: "Large", type: "Monstrosity",
	ac: 15, hp: 75, init: 0, cr: "3",
	alignment: alignments.n,
	environments: [ "dungeon", "underground" ],
	id: "3e4d8e86-de04-4ccb-aee2-2f4049b6769b",
});
addMonster({
	name: "Hydra",
	size: "Huge", type: "Monstrosity",
	ac: 15, hp: 172, init: 1, cr: "8",
	environments: [ "aquatic", "cave", "coast", "dungeon", "forest", "mountain", "ruins", "swamp", "underground" ],
	id: "3e632ad7-8ffd-40b7-8a37-45386577bd45",
});
addMonster({
	name: "Intellect Devourer",
	size: "Tiny", type: "Aberration",
	ac: 12, hp: 21, init: 2, cr: "2",
	alignment: alignments.le,
	environments: [ "dungeon", "underground" ],
	id: "8ccb4fb2-f8aa-421d-a60e-76255953b97a",
});
addMonster({
	name: "Invisible Stalker",
	size: "Medium", type: "Elemental",
	ac: 14, hp: 104, init: 4, cr: "6",
	alignment: alignments.n,
	environments: [ "arctic", "cave", "coast", "desert", "dungeon", "forest", "grassland", "mountain", "ruins", "swamp", "underground", "urban", "planar" ],
	id: "ee83fc27-4e79-4a9d-96ec-909aed739470",
});
addMonster({
	name: "Jackalwere",
	size: "Medium", type: "Humanoid", tags: [ "Shapechanger" ],
	ac: 12, hp: 18, init: 2, cr: "1/2",
	alignment: alignments.ce,
	environments: [ "desert", "grassland", "urban" ],
	id: "977db5ba-5f5a-4a4d-851a-854696a05c01",
});
addMonster({
	name: "Kenku",
	size: "Medium", type: "Humanoid", tags: [ "Kenku" ],
	ac: 13, hp: 13, init: 3, cr: "1/4",
	alignment: alignments.cn,
	environments: [ "arctic", "coast", "desert", "forest", "grassland", "mountain", "ruins", "urban" ],
	id: "0d1a69f3-7416-4bd7-9166-4e7b0fdd0af3",
});
addMonster({
	section: "Kobolds", name: "Kobold",
	size: "Small", type: "Humanoid", tags: [ "Kobold" ],
	ac: 12, hp: 5, init: 2, cr: "1/8",
	alignment: alignments.le,
	environments: [ "cave", "dungeon", "mountain", "underground" ],
	id: "baa3449e-bfd5-408d-8b7e-206a3bebf8ca",
});
addMonster({
	section: "Kobolds", name: "Winged Kobold",
	size: "Small", type: "Humanoid", tags: [ "Kobold" ],
	ac: 13, hp: 7, init: 3, cr: "1/4",
	alignment: alignments.le,
	environments: [ "mountain", "underground" ],
	id: "e0b6446f-3791-479d-9e03-9a71c0de9f52",
});
addMonster({
	name: "Kraken",
	size: "Gargantuan", type: "Monstrosity", tags: [ "Titan" ],
	ac: 18, hp: 472, init: 0, cr: "23",
	alignment: alignments.ce,
	environments: [ "aquatic", "coast" ],
	legendary: true,
	lair: true,
	id: "db248a11-5c00-433b-91e5-606ac09a3df9",
});
addMonster({
	section: "Kuo-toa", name: "Kuo-toa",
	size: "Medium", type: "Humanoid", tags: [ "Kuo-toa" ],
	ac: 13, hp: 18, init: 0, cr: "1/4",
	alignment: alignments.ne,
	environments: [ "aquatic", "coast" ],
	id: "5bb857a3-c242-4b8e-9ad7-08134220a539",
});
addMonster({
	section: "Kuo-toa", name: "Kuo-toa Archpriest",
	size: "Medium", type: "Humanoid", tags: [ "Kuo-toa" ],
	ac: 13, hp: 97, init: 2, cr: "6",
	alignment: alignments.ne,
	environments: [ "aquatic", "coast" ],
	id: "ef27b3eb-48e1-4415-a176-5df27a41d84f",
});
addMonster({
	section: "Kuo-toa", name: "Kuo-toa Whip",
	size: "Medium", type: "Humanoid", tags: [ "Kuo-toa" ],
	ac: 11, hp: 65, init: 0, cr: "1",
	alignment: alignments.ne,
	environments: [ "aquatic", "coast" ],
	id: "18f26ee3-cb25-4a4b-a37e-eeef773cb3ad",
});
addMonster({
	name: "Lamia",
	size: "Large", type: "Monstrosity",
	ac: 13, hp: 97, init: 1, cr: "4",
	alignment: alignments.ce,
	environments: [ "desert", "ruins" ],
	id: "78334f11-4007-4c8d-a133-55c8581d13bf",
});
addMonster({
	section: "Lizardfolk", name: "Lizardfolk",
	size: "Medium", type: "Humanoid", tags: [ "Lizardfolk" ],
	ac: 15, hp: 22, init: 0, cr: "1/2",
	alignment: alignments.n,
	environments: [ "coast", "dungeon", "forest", "grassland", "swamp" ],
	id: "5ec95d84-a847-496d-9cca-f4a3c13a81d1",
});
addMonster({
	section: "Lizardfolk", name: "Lizardfolk Shaman",
	size: "Medium", type: "Humanoid", tags: [ "Lizardfolk" ],
	ac: 13, hp: 27, init: 0, cr: "2",
	alignment: alignments.n,
	environments: [ "coast", "dungeon", "forest", "grassland", "swamp" ],
	id: "e94dadeb-692d-43cf-8d59-91f1624c795d",
});
addMonster({
	section: "Lizardfolk", name: "Lizard King/Queen",
	size: "Medium", type: "Humanoid", tags: [ "Lizardfolk" ],
	ac: 15, hp: 75, init: 1, cr: "4",
	alignment: alignments.ce,
	environments: [ "coast", "dungeon", "forest", "grassland", "swamp" ],
	id: "9e448cc3-7e92-4af8-8610-601efd00aef8",
});
addMonster({
	section: "Lycanthropes", name: "Werebear",
	size: "Medium", type: "Humanoid", tags: [ "Human", "Shapechanger" ],
	ac: "10 in humanoid form, 11 in bear and hybrid form", hp: 135, init: 0, cr: "5",
	alignment: alignments.ng,
	environments: [ "cave", "forest", "mountain", "urban" ],
	id: "db897f13-24c8-4332-808f-682061af4b36",
});
addMonster({
	section: "Lycanthropes", name: "Wereboar",
	size: "Medium", type: "Humanoid", tags: [ "Human", "Shapechanger" ],
	ac: "10 in humanoid form, 11 in boar and hybrid form", hp: 78, init: 0, cr: "4",
	alignment: alignments.ne,
	environments: [ "forest", "grassland", "swamp", "urban" ],
	id: "59408dc1-6bee-467c-9e7e-108d7870d5a7",
});
addMonster({
	section: "Lycanthropes", name: "Wererat",
	size: "Medium", type: "Humanoid", tags: [ "Human", "Shapechanger" ],
	ac: 12, hp: 33, init: 2, cr: "2",
	alignment: alignments.le,
	environments: [ "cave", "dungeon", "ruins", "swamp", "underground", "urban" ],
	id: "c8e2837f-ea3b-42a7-8a9b-84056d186006",
});
addMonster({
	section: "Lycanthropes", name: "Weretiger",
	size: "Medium", type: "Humanoid", tags: [ "Human", "Shapechanger" ],
	ac: 12, hp: 120, init: 2, cr: "4",
	alignment: alignments.n,
	environments: [ "forest", "urban" ],
	id: "e63e1150-3b0b-46e0-a2cb-2a2f30cf5c69",
});
addMonster({
	section: "Lycanthropes", name: "Werewolf",
	size: "Medium", type: "Humanoid", tags: [ "Human", "Shapechanger" ],
	ac: "11 in humanoid form, 12 in wolf or hybrid form", hp: 58, init: 1, cr: "3",
	alignment: alignments.ce,
	environments: [ "dungeon", "forest", "grassland", "urban" ],
	id: "80a17f83-7b94-497e-a10d-3dd1f3a8a889",
});
addMonster({
	name: "Lich",
	size: "Medium", type: "Undead",
	ac: 17, hp: 135, init: 3, cr: "21",
	alignment: alignments.any_evil,
	environments: [ "dungeon", "ruins", "urban" ],
	legendary: true,
	lair: false,
	id: "a5dc844c-9763-4ce9-81e9-c83ec00976af",
});
addMonster({
	name: "Lich (in lair)",
	size: "Medium", type: "Undead",
	ac: 17, hp: 135, init: 3, cr: "22",
	alignment: alignments.any_evil,
	environments: [ "dungeon", "ruins", "urban" ],
	legendary: true,
	lair: true,
	id: "3a25a6fc-7a1d-4437-9010-213e7a9ec153",
});
addMonster({
	name: "Magmin",
	size: "Small", type: "Elemental",
	ac: 14, hp: 9, init: 2, cr: "1/2",
	alignment: alignments.cn,
	environments: [ "dungeon", "ruins", "urban", "planar" ],
	id: "f9b4996c-a11c-4f18-ab8b-fa627f384da7",
});
addMonster({
	name: "Manticore",
	size: "Large", type: "Monstrosity",
	ac: 14, hp: 68, init: 3, cr: "3",
	alignment: alignments.le,
	environments: [ "arctic", "cave", "coast", "grassland", "mountain", "ruins" ],
	id: "70a0cbe2-5320-465d-afdf-7a4643da02fe",
});
addMonster({
	name: "Medusa",
	size: "Medium", type: "Monstrosity",
	ac: 15, hp: 127, init: 2, cr: "6",
	alignment: alignments.le,
	environments: [ "cave", "dungeon", "mountain", "ruins", "urban" ],
	id: "15a09594-1143-4b08-8f4e-0f5d9891b4d1",
});
addMonster({
	section: "Mephits", name: "Dust Mephit",
	size: "Small", type: "Elemental",
	ac: 12, hp: 17, init: 2, cr: "1/2",
	alignment: alignments.ne,
	environments: [ "dungeon", "ruins", "urban", "planar" ],
	id: "82d58511-f0e1-4e2c-a4fc-8908210146a1",
});
addMonster({
	section: "Mephits", name: "Ice Mephit",
	size: "Small", type: "Elemental",
	ac: 11, hp: 21, init: 1, cr: "1/2",
	alignment: alignments.ne,
	environments: [ "arctic", "dungeon", "urban", "planar" ],
	id: "85ca0247-73d6-43c3-b25d-4a9026586669",
});
addMonster({
	section: "Mephits", name: "Magma Mephit",
	size: "Small", type: "Elemental",
	ac: 11, hp: 22, init: 1, cr: "1/2",
	alignment: alignments.ne,
	environments: [ "cave", "dungeon", "mountain", "urban", "planar" ],
	id: "1f7aa396-edd4-47f6-88b6-f98793df12e5",
});
addMonster({
	section: "Mephits", name: "Mud Mephit",
	size: "Small", type: "Elemental",
	ac: 11, hp: 27, init: 1, cr: "1/4",
	alignment: alignments.ne,
	environments: [ "coast", "dungeon", "forest", "swamp", "urban", "planar" ],
	id: "edc88a1f-98d9-44f8-b376-e3b11cb24401",
});
addMonster({
	section: "Mephits", name: "Smoke Mephit",
	size: "Small", type: "Elemental",
	ac: 12, hp: 2, init: 2, cr: "1/4",
	alignment: alignments.ne,
	environments: [ "dungeon", "urban", "planar" ],
	id: "bdda67cb-ae81-4107-860a-eee6456ea92b",
});
addMonster({
	section: "Mephits", name: "Steam Mephit",
	size: "Small", type: "Elemental",
	ac: 10, hp: 21, init: 0, cr: "1/4",
	alignment: alignments.ne,
	environments: [ "dungeon", "urban", "planar" ],
	id: "d28e71ee-8388-4534-bb38-209de47bbe5e",
});
addMonster({
	name: "Merfolk",
	size: "Medium", type: "Humanoid", tags: [ "Merfolk" ],
	ac: 11, hp: 11, init: 1, cr: "1/8",
	alignment: alignments.n,
	environments: [ "aquatic" ],
	id: "620fe04b-ad34-4183-8af7-980b3609c482",
});
addMonster({
	name: "Merrow",
	size: "Large", type: "Monstrosity",
	ac: 13, hp: 45, init: 0, cr: "2",
	alignment: alignments.ce,
	environments: [ "aquatic" ],
	id: "8e619f31-7241-4022-91a2-de617597b090",
});
addMonster({
	section: "Mind Flayer", name: "Mind Flayer",
	size: "Medium", type: "Aberration",
	ac: 15, hp: 71, init: 1, cr: "7",
	alignment: alignments.le,
	environments: [ "dungeon", "underground", "urban" ],
	id: "00235a58-a598-495b-ba4e-7d56c15cbfc8",
});
addMonster({
	section: "Mind Flayer", name: "Mind Flayer Arcanist",
	size: "Medium", type: "Aberration",
	ac: 15, hp: 71, init: 1, cr: "8",
	alignment: alignments.le,
	environments: [ "dungeon", "underground", "urban" ],
	id: "699c0e8b-def1-41ff-a1bc-23d5315c973e",
});
addMonster({
	name: "Mimic",
	size: "Medium", type: "Monstrosity", tags: [ "Shapechanger" ],
	ac: 12, hp: 58, init: 1, cr: "2",
	alignment: alignments.n,
	environments: [ "dungeon" ],
	id: "ef5521a7-9b12-498b-907d-18acfdf73876",
});
addMonster({
	name: "Minotaur",
	size: "Large", type: "Monstrosity",
	ac: 14, hp: 76, init: 0, cr: "3",
	alignment: alignments.ce,
	environments: [ "cave", "dungeon", "ruins", "underground" ],
	id: "852cfe83-a0d9-4170-86d7-e16b864ea7ef",
});
addMonster({
	section: "Modrons", name: "Monodrone",
	size: "Medium", type: "Construct",
	ac: 15, hp: 5, init: 1, cr: "1/8",
	alignment: alignments.ln,
	environments: [ "planar" ],
	id: "36cf9acb-d215-4366-b8d8-cdd283bcaf82",
});
addMonster({
	section: "Modrons", name: "Duodrone",
	size: "Medium", type: "Construct",
	ac: 15, hp: 11, init: 1, cr: "1/4",
	alignment: alignments.ln,
	environments: [ "planar" ],
	id: "1c8b43c4-f7ad-40cb-b5c6-ceab1f78c94f",
});
addMonster({
	section: "Modrons", name: "Tridrone",
	size: "Medium", type: "Construct",
	ac: 15, hp: 16, init: 1, cr: "1/2",
	alignment: alignments.ln,
	environments: [ "planar" ],
	id: "8d9f2854-d059-4487-a326-ffd80b7ff95d",
});
addMonster({
	section: "Modrons", name: "Quadrone",
	size: "Medium", type: "Construct",
	ac: 16, hp: 22, init: 2, cr: "1",
	alignment: alignments.ln,
	environments: [ "planar" ],
	id: "06adb243-3e58-4b29-8fbe-34331bcb1b3e",
});
addMonster({
	section: "Modrons", name: "Pentadrone",
	size: "Large", type: "Construct",
	ac: 16, hp: 32, init: 2, cr: "2",
	alignment: alignments.ln,
	environments: [ "planar" ],
	id: "8d7daed1-b832-454d-86cf-be5c99570402",
});
addMonster({
	section: "Mummies", name: "Mummy",
	size: "Medium", type: "Undead",
	ac: 11, hp: 58, init: -1, cr: "3",
	alignment: alignments.le,
	environments: [ "desert", "dungeon" ],
	id: "d86cd0d2-a792-4585-809e-e59919189936",
});
addMonster({
	section: "Mummies", name: "Mummy Lord",
	size: "Medium", type: "Undead",
	ac: 17, hp: 97, init: 0, cr: "15",
	alignment: alignments.le,
	environments: [ "desert", "dungeon" ],
	legendary: true,
	lair: true,
	id: "f210a3a6-0a2d-4d9c-9ab0-0e837eb33749",
});
addMonster({
	section: "Myconids", name: "Myconid Sprout",
	size: "Small", type: "Plant",
	ac: 10, hp: 7, init: 0, cr: "0",
	alignment: alignments.ln,
	environments: [ "underground" ],
	id: "4704981f-beb2-4b2a-98ce-30901162fe10",
});
addMonster({
	section: "Myconids", name: "Quaggoth Spore Servant",
	size: "Medium", type: "Plant",
	ac: 13, hp: 45, init: 1, cr: "1",
	environments: [ "underground" ],
	id: "fdecca35-c5ec-462b-958c-6c3f3b676158",
});
addMonster({
	section: "Myconids", name: "Myconid Adult",
	size: "Medium", type: "Plant",
	ac: 12, hp: 22, init: 0, cr: "1/2",
	alignment: alignments.ln,
	environments: [ "underground" ],
	id: "13628cc9-ab44-4869-8bfd-cf155aca78c7",
});
addMonster({
	section: "Myconids", name: "Myconid Sovereign",
	size: "Large", type: "Plant",
	ac: 13, hp: 60, init: 0, cr: "2",
	alignment: alignments.ln,
	environments: [ "underground" ],
	id: "168dfe89-609f-4112-8925-25595fe88acd",
});
addMonster({
	section: "Nagas", name: "Bone Naga",
	size: "Large", type: "Undead",
	ac: 15, hp: 58, init: 3, cr: "4",
	alignment: alignments.le,
	environments: [ "dungeon", "ruins" ],
	id: "dd409232-47c5-4cc2-adcf-c13ef6b3b489",
});
addMonster({
	section: "Nagas", name: "Guardian Naga",
	size: "Large", type: "Monstrosity",
	ac: 15, hp: 75, init: 3, cr: "10",
	alignment: alignments.lg,
	environments: [ "cave", "coast", "forest", "ruins" ],
	id: "9f2cb577-d9e2-48bb-ba99-6fc9ba74ec69",
});
addMonster({
	section: "Nagas", name: "Spirit Naga",
	size: "Large", type: "Monstrosity",
	ac: 18, hp: 127, init: 4, cr: "8",
	alignment: alignments.ce,
	environments: [ "cave", "dungeon", "ruins", "underground" ],
	id: "552f997f-6cf1-4150-8144-aea22f652471",
});
addMonster({
	name: "Nightmare",
	size: "Large", type: "Fiend",
	ac: 13, hp: 68, init: 2, cr: "3",
	alignment: alignments.ne,
	environments: [ "swamp", "planar" ],
	id: "4ecef288-1f16-48b2-be23-f36b7fde5ced",
});
addMonster({
	name: "Nothic",
	size: "Medium", type: "Aberration",
	ac: 15, hp: 45, init: 3, cr: "2",
	alignment: alignments.ne,
	environments: [ "dungeon", "ruins", "urban" ],
	id: "ed0bb2d0-aef6-4a4b-a9cb-4a38045cc29c",
});
addMonster({
	section: "Ogres", name: "Half-Ogre",
	size: "Large", type: "Giant",
	ac: 12, hp: 30, init: 0, cr: "1",
	alignment: alignments.ce,
	environments: [ "arctic", "coast", "desert", "dungeon", "forest", "grassland", "mountain", "ruins", "swamp", "urban" ],
	id: "89e0d155-e208-41f0-86fc-af2a62eb4c73",
});
addMonster({
	section: "Ogres", name: "Ogre",
	size: "Large", type: "Giant",
	ac: 11, hp: 59, init: -1, cr: "2",
	alignment: alignments.ce,
	environments: [ "dungeon", "forest", "mountain", "swamp" ],
	id: "545c030a-1674-4838-9d43-752db8265f87",
});
addMonster({
	name: "Oni",
	size: "Large", type: "Giant",
	ac: 16, hp: 110, init: 0, cr: "7",
	alignment: alignments.le,
	environments: [ "dungeon", "grassland", "ruins", "urban" ],
	id: "06db3698-ec58-48d4-867a-f6fdd875823b",
});
addMonster({
	section: "Oozes", name: "Black Pudding",
	size: "Large", type: "Ooze",
	ac: 7, hp: 85, init: -3, cr: "4",
	environments: [ "dungeon" ],
	id: "e5612386-a501-4f25-afd2-8cd9977ec4af",
});
addMonster({
	section: "Oozes", name: "Gelatinous Cube",
	size: "Large", type: "Ooze",
	ac: 6, hp: 84, init: -4, cr: "2",
	environments: [ "dungeon" ],
	id: "2230d3a4-822b-48b2-99f5-373ffb6695a8",
});
addMonster({
	section: "Oozes", name: "Gray Ooze",
	size: "Medium", type: "Ooze",
	ac: 8, hp: 22, init: -2, cr: "1/2",
	environments: [ "dungeon" ],
	id: "d82d19dd-2e7e-407f-9861-b7e2ee599e5c",
});
addMonster({
	section: "Oozes", name: "Ochre Jelly",
	size: "Large", type: "Ooze",
	ac: 8, hp: 45, init: -2, cr: "2",
	environments: [ "dungeon" ],
	id: "0474b4f6-5b72-46ac-9405-5e39b28750c2",
});
addMonster({
	section: "Orcs", name: "Orc",
	size: "Medium", type: "Humanoid", tags: [ "Orc" ],
	ac: 13, hp: 15, init: 1, cr: "1/2",
	alignment: alignments.ce,
	environments: [ "arctic", "coast", "desert", "dungeon", "forest", "grassland", "mountain", "ruins", "swamp", "urban" ],
	id: "2fc71e84-7157-4d3f-9042-d9b17236f5f0",
});
addMonster({
	section: "Orcs", name: "Orc Eye of Gruumsh",
	size: "Medium", type: "Humanoid", tags: [ "Orc" ],
	ac: 16, hp: 45, init: 1, cr: "2",
	alignment: alignments.ce,
	environments: [ "arctic", "coast", "desert", "dungeon", "forest", "grassland", "mountain", "ruins", "swamp", "urban" ],
	id: "18e67457-97e5-4efc-bb6c-084a910fbbd1",
});
addMonster({
	section: "Orcs", name: "Orc War Chief",
	size: "Medium", type: "Humanoid", tags: [ "Orc" ],
	ac: 16, hp: 93, init: 1, cr: "4",
	alignment: alignments.ce,
	environments: [ "arctic", "coast", "desert", "dungeon", "forest", "grassland", "mountain", "ruins", "swamp", "urban" ],
	id: "21ebdbb0-2305-4922-ae09-3c73eab5fb06",
});
addMonster({
	section: "Orcs", name: "Orog",
	size: "Medium", type: "Humanoid", tags: [ "Orc" ],
	ac: 18, hp: 42, init: 1, cr: "2",
	alignment: alignments.ce,
	environments: [ "arctic", "coast", "desert", "dungeon", "forest", "grassland", "mountain", "ruins", "swamp", "urban" ],
	id: "33072b76-ec36-4c54-9318-83d04d6ef44d",
});
addMonster({
	name: "Otyugh",
	size: "Large", type: "Aberration",
	ac: 14, hp: 114, init: 0, cr: "5",
	alignment: alignments.n,
	environments: [ "cave", "dungeon", "ruins", "swamp", "underground" ],
	id: "9dca97ac-f3fa-4be6-8a39-09291505f159",
});
addMonster({
	name: "Owlbear",
	size: "Large", type: "Monstrosity",
	ac: 13, hp: 59, init: 1, cr: "3",
	environments: [ "forest", "mountain" ],
	id: "293ad61d-ee17-4a20-954a-ab22f6edaa8d",
});
addMonster({
	name: "Pegasus",
	size: "Large", type: "Celestial",
	ac: 12, hp: 59, init: 2, cr: "2",
	alignment: alignments.cg,
	environments: [ "mountain" ],
	id: "9f07db07-b9f9-4913-8603-3aeef1b217f3",
});
addMonster({
	name: "Peryton",
	size: "Large", type: "Monstrosity",
	ac: 13, hp: 33, init: 1, cr: "2",
	alignment: alignments.ce,
	environments: [ "mountain" ],
	id: "df1f8a95-9f6b-4699-af85-da4368f16cfd",
});
addMonster({
	name: "Piercer",
	size: "Medium", type: "Monstrosity",
	ac: 15, hp: 22, init: 1, cr: "1/2",
	environments: [ "cave", "underground" ],
	id: "cc49ec49-caa4-404b-92e6-9e7b4604cb12",
});
addMonster({
	name: "Pixie",
	size: "Tiny", type: "Fey",
	ac: 15, hp: 1, init: 5, cr: "1/4",
	alignment: alignments.ng,
	environments: [ "coast", "forest", "grassland", "swamp" ],
	id: "d851b9c3-0c0e-4378-a991-9b0d05c80931",
});
addMonster({
	name: "Pseudodragon",
	size: "Tiny", type: "Dragon",
	ac: 13, hp: 7, init: 2, cr: "1/4",
	alignment: alignments.ng,
	environments: [ "urban" ],
	id: "ada98bc9-cb5c-4f02-8230-a349f85df99c",
});
addMonster({
	name: "Purple Worm",
	size: "Gargantuan", type: "Monstrosity",
	ac: 18, hp: 247, init: -2, cr: "15",
	environments: [ "underground" ],
	id: "0de2b8ec-9d78-497b-83a3-e7eb530a4c85",
});
addMonster({
	section: "Quaggoth", name: "Quaggoth",
	size: "Medium", type: "Humanoid", tags: [ "Quaggoth" ],
	ac: 13, hp: 45, init: 1, cr: "2",
	alignment: alignments.cn,
	environments: [ "dungeon", "urban" ],
	id: "0ff27a87-12ee-4196-a998-8d41c2ae1ee1",
});
addMonster({
	section: "Quaggoth", name: "Quaggoth Thonot",
	size: "Medium", type: "Humanoid", tags: [ "Quaggoth" ],
	ac: 13, hp: 45, init: 1, cr: "3",
	alignment: alignments.cn,
	environments: [ "dungeon", "urban" ],
	id: "d9e9e29a-ba95-4740-86a8-927843168eb8",
});
addMonster({
	name: "Rakshasa",
	size: "Medium", type: "Fiend",
	ac: 16, hp: 110, init: 3, cr: "13",
	alignment: alignments.le,
	environments: [ "urban", "planar" ],
	id: "018d5cba-4e7e-4519-b181-fb0bb7bf4474",
});
addMonster({
	section: "Remorhazes", name: "Remorhaz",
	size: "Huge", type: "Monstrosity",
	ac: 17, hp: 195, init: 1, cr: "11",
	environments: [ "arctic" ],
	id: "148bab3f-70b0-45bb-af68-df93ae89c77f",
});
addMonster({
	section: "Remorhazes", name: "Young Remorhaz",
	size: "Large", type: "Monstrosity",
	ac: 14, hp: 93, init: 1, cr: "5",
	environments: [ "arctic", "cave" ],
	id: "c10d36ba-73da-4718-bf7f-f078791639dd",
});
addMonster({
	name: "Revenant",
	size: "Medium", type: "Undead",
	ac: 13, hp: 136, init: 2, cr: "5",
	alignment: alignments.n,
	environments: [ "arctic", "cave", "coast", "desert", "dungeon", "forest", "grassland", "mountain", "ruins", "swamp", "underground", "urban" ],
	id: "89ebcb90-c381-450d-a303-e1cb0f470a6a",
});
addMonster({
	name: "Roc",
	size: "Gargantuan", type: "Monstrosity",
	ac: 15, hp: 248, init: 0, cr: "11",
	environments: [ "coast", "desert", "mountain" ],
	id: "77263f03-1681-4684-b9fe-8c089d8721a7",
});
addMonster({
	name: "Roper",
	size: "Large", type: "Monstrosity",
	ac: 20, hp: 93, init: -1, cr: "5",
	alignment: alignments.ne,
	environments: [ "cave", "underground" ],
	id: "8e7f5fd8-557c-4176-aee8-2a894afb6b99",
});
addMonster({
	name: "Rust Monster",
	size: "Medium", type: "Monstrosity",
	ac: 14, hp: 27, init: 1, cr: "1/2",
	environments: [ "dungeon", "underground" ],
	id: "0245be52-98ed-441c-b7b6-823866ac50b0",
});
addMonster({
	section: "Sahuagin", name: "Sahuagin",
	size: "Medium", type: "Humanoid", tags: [ "Sahuagin" ],
	ac: 12, hp: 22, init: 0, cr: "1/2",
	alignment: alignments.le,
	environments: [ "aquatic", "coast" ],
	id: "cf012d1a-c0c3-4426-afca-8ef34b863071",
});
addMonster({
	section: "Sahuagin", name: "Sahuagin Baron",
	size: "Large", type: "Humanoid", tags: [ "Sahuagin" ],
	ac: 16, hp: 76, init: 2, cr: "5",
	alignment: alignments.le,
	environments: [ "aquatic", "coast" ],
	id: "791f3452-b13b-417b-923b-137e2f2073fa",
});
addMonster({
	section: "Sahuagin", name: "Sahuagin Priestess",
	size: "Medium", type: "Humanoid", tags: [ "Sahuagin" ],
	ac: 12, hp: 33, init: 0, cr: "2",
	alignment: alignments.le,
	environments: [ "aquatic", "coast" ],
	id: "c234a705-22a1-423d-99d2-73699bb0b58e",
});
addMonster({
	section: "Salamanders", name: "Fire Snake",
	size: "Medium", type: "Elemental",
	ac: 14, hp: 22, init: 2, cr: "1",
	alignment: alignments.ne,
	environments: [ "forest", "planar" ],
	id: "20207713-fef6-4f14-a3b0-1417d18d755a",
});
addMonster({
	section: "Salamanders", name: "Salamander",
	size: "Large", type: "Elemental",
	ac: 15, hp: 90, init: 2, cr: "5",
	alignment: alignments.ne,
	environments: [ "forest", "planar" ],
	id: "15cade7d-8730-49a3-bd2b-643a9a62d8c4",
});
addMonster({
	name: "Satyr",
	size: "Medium", type: "Fey",
	ac: 14, hp: 31, init: 3, cr: "1/2",
	alignment: alignments.cn,
	environments: [ "forest", "grassland", "urban" ],
	id: "f373bc88-ba01-4e6a-8889-580be0265c59",
});
addMonster({
	name: "Scarecrow",
	size: "Medium", type: "Construct",
	ac: 11, hp: 36, init: 1, cr: "1",
	alignment: alignments.ce,
	environments: [ "grassland", "urban" ],
	id: "24d24844-c27d-4261-b71e-bdca6de3f2f7",
});
addMonster({
	name: "Shadow",
	size: "Medium", type: "Undead",
	ac: 12, hp: 16, init: 2, cr: "1/2",
	alignment: alignments.ce,
	environments: [ "dungeon", "ruins", "swamp", "urban" ],
	id: "c4551c2c-c686-4105-83f6-87c873f8809f",
});
addMonster({
	name: "Shambling Mound",
	size: "Large", type: "Plant",
	ac: 15, hp: 136, init: -1, cr: "5",
	environments: [ "forest", "swamp" ],
	id: "ea9c253b-1fe2-4e66-9331-61f6e3b02336",
});
addMonster({
	name: "Shield Guardian",
	size: "Large", type: "Construct",
	ac: 17, hp: 142, init: -1, cr: "7",
	environments: [ "dungeon", "ruins", "urban" ],
	id: "212a9d4e-60b7-4c1e-ac1c-67f26855e878",
});
addMonster({
	section: "Skeletons", name: "Skeleton",
	size: "Medium", type: "Undead",
	ac: 13, hp: 13, init: 2, cr: "1/4",
	alignment: alignments.le,
	environments: [ "dungeon", "ruins", "urban" ],
	id: "3e946348-1cc2-405f-9975-5a4c09445750",
});
addMonster({
	section: "Skeletons", name: "Minotaur Skeleton",
	size: "Large", type: "Undead",
	ac: 12, hp: 67, init: 0, cr: "2",
	alignment: alignments.le,
	environments: [ "dungeon", "underground", "urban" ],
	id: "8e06aaf8-6a32-44d7-8c40-0b829ac94413",
});
addMonster({
	section: "Skeletons", name: "Warhorse Skeleton",
	size: "Large", type: "Undead",
	ac: 13, hp: 22, init: 1, cr: "1/2",
	alignment: alignments.le,
	environments: [ "grassland", "ruins" ],
	id: "33ec8ed0-0cd0-4def-9da6-761cf73206da",
});
addMonster({
	section: "Slaadi", name: "Blue Slaad",
	size: "Large", type: "Aberration",
	ac: 15, hp: 123, init: 2, cr: "7",
	alignment: alignments.cn,
	environments: [ "planar" ],
	id: "36879d12-0c10-4f48-beff-bc39984968c7",
});
addMonster({
	section: "Slaadi", name: "Gray Slaad",
	size: "Medium", type: "Aberration",
	ac: 18, hp: 127, init: 3, cr: "9",
	alignment: alignments.cn,
	environments: [ "planar" ],
	id: "7087acfe-930d-49b7-9fab-a0351650c7ce",
});
addMonster({
	section: "Slaadi", name: "Green Slaad",
	size: "Large", type: "Aberration",
	ac: 16, hp: 127, init: 2, cr: "8",
	alignment: alignments.cn,
	environments: [ "planar" ],
	id: "69a7ed5e-16a9-466d-90a9-867136fb9469",
});
addMonster({
	section: "Slaadi", name: "Red Slaad",
	size: "Large", type: "Aberration",
	ac: 14, hp: 93, init: 1, cr: "5",
	alignment: alignments.cn,
	environments: [ "planar" ],
	id: "8ff160ae-eb45-4464-a436-e40c751cad1e",
});
addMonster({
	section: "Slaadi", name: "Slaad Tadpole",
	size: "Tiny", type: "Aberration",
	ac: 12, hp: 10, init: 2, cr: "1/8",
	alignment: alignments.cn,
	environments: [ "planar" ],
	id: "68b382e5-a0a4-4b9b-bc57-d9684105296c",
});
addMonster({
	section: "Slaadi", name: "Death Slaad",
	size: "Medium", type: "Aberration", tags: [ "Shapechanger" ],
	ac: 18, hp: 170, init: 2, cr: "10",
	alignment: alignments.ce,
	environments: [ "planar" ],
	id: "7eee83ee-5f71-458a-b0c7-ac04fd78301f",
});
addMonster({
	section: "Specter", name: "Poltergeist",
	size: "Medium", type: "Undead",
	ac: 12, hp: 22, init: 2, cr: "2",
	alignment: alignments.ce,
	environments: [ "dungeon", "ruins", "urban" ],
	id: "ed0ed3ff-2489-4a07-88f6-1e5e9b33580d",
});
addMonster({
	section: "Specter", name: "Specter",
	size: "Medium", type: "Undead",
	ac: 12, hp: 22, init: 2, cr: "1",
	alignment: alignments.ce,
	environments: [ "dungeon", "ruins", "urban" ],
	id: "3a005074-e1df-4b63-88a4-3dd4edbd237a",
});
addMonster({
	section: "Sphinxes", name: "Androsphinx",
	size: "Large", type: "Monstrosity",
	ac: 17, hp: 199, init: 0, cr: "17",
	alignment: alignments.ln,
	environments: [ "dungeon", "ruins" ],
	legendary: true,
	lair: true,
	id: "f0faeb6f-9112-467a-bf48-b4fb5e2f4b26",
});
addMonster({
	section: "Sphinxes", name: "Gynosphinx",
	size: "Large", type: "Monstrosity",
	ac: 17, hp: 136, init: 2, cr: "11",
	alignment: alignments.ln,
	environments: [ "dungeon", "ruins" ],
	legendary: true,
	lair: true,
	id: "adf26741-67bd-4908-92e7-231a28374808",
});
addMonster({
	name: "Sprite",
	size: "Tiny", type: "Fey",
	ac: 15, hp: 2, init: 4, cr: "1/4",
	alignment: alignments.ng,
	environments: [ "forest", "grassland", "swamp" ],
	id: "e91d49d6-b139-4457-bd9c-45fd656ec408",
});
addMonster({
	name: "Stirge",
	size: "Tiny", type: "Beast",
	ac: 14, hp: 2, init: 3, cr: "1/8",
	environments: [ "forest", "swamp" ],
	id: "b02dadd4-aa89-426c-ac9b-bfa07b8fe1fc",
});
addMonster({
	name: "Succubus/Incubus",
	size: "Medium", type: "Fiend", tags: [ "Shapechanger" ],
	ac: 15, hp: 66, init: 3, cr: "4",
	alignment: alignments.ne,
	environments: [ "dungeon", "urban", "planar" ],
	id: "63a62f8f-06b8-4ae2-a746-9c42448399d0",
});
addMonster({
	name: "Tarrasque",
	size: "Gargantuan", type: "Monstrosity",
	ac: 25, hp: 676, init: 0, cr: "30",
	environments: [ "aquatic", "arctic", "cave", "coast", "desert", "dungeon", "forest", "grassland", "mountain", "ruins", "swamp", "underground", "urban", "planar" ],
	legendary: true,
	id: "962c28e0-17f2-4fa9-b76c-0017f1768650",
});
addMonster({
	name: "Thri-kreen",
	size: "Medium", type: "Humanoid", tags: [ "Thri-kreen" ],
	ac: 15, hp: 33, init: 2, cr: "1",
	alignment: alignments.cn,
	environments: [ "desert", "grassland" ],
	id: "28a1d46d-c0ae-4865-80d1-866629c4f817",
});
addMonster({
	name: "Treant",
	size: "Huge", type: "Plant",
	ac: 16, hp: 138, init: -1, cr: "9",
	alignment: alignments.cg,
	environments: [ "forest", "swamp" ],
	id: "b4a2167a-3d19-466f-bcca-65bb10c00c69",
});
addMonster({
	name: "Troglodyte",
	size: "Medium", type: "Humanoid", tags: [ "Troglodyte" ],
	ac: 11, hp: 13, init: 0, cr: "1/4",
	alignment: alignments.ce,
	environments: [ "cave", "dungeon", "underground" ],
	id: "6d5a54d5-176b-46f6-988e-db5ff8176fab",
});
addMonster({
	name: "Troll",
	size: "Large", type: "Giant",
	ac: 15, hp: 84, init: 1, cr: "5",
	alignment: alignments.ce,
	environments: [ "cave", "dungeon", "forest", "mountain", "swamp" ],
	id: "243e91ab-b859-44ce-a9cb-e14a055d1151",
});
addMonster({
	name: "Umber Hulk",
	size: "Large", type: "Monstrosity",
	ac: 18, hp: 93, init: 1, cr: "5",
	alignment: alignments.ce,
	environments: [ "cave", "underground" ],
	id: "ea840106-9d27-453c-9ded-c93725740323",
});
addMonster({
	name: "Unicorn",
	size: "Large", type: "Celestial",
	ac: 12, hp: 67, init: 2, cr: "5",
	alignment: alignments.lg,
	environments: [ "forest", "ruins" ],
	legendary: true,
	lair: true,
	id: "fb6ed7bc-7f48-465b-8de0-083c4365d979",
});
addMonster({
	section: "Vampires", name: "Vampire",
	size: "Medium", type: "Undead", tags: [ "Shapechanger" ],
	ac: 16, hp: 144, init: 4, cr: "13",
	alignment: alignments.le,
	environments: [ "dungeon", "ruins", "urban" ],
	legendary: true,
	lair: true,
	id: "f6277838-fcd7-4d25-b6a5-4049361e0978",
});
addMonster({
	section: "Vampires", name: "Vampire Spawn",
	size: "Medium", type: "Undead",
	ac: 15, hp: 82, init: 3, cr: "5",
	alignment: alignments.ne,
	environments: [ "dungeon", "ruins", "urban" ],
	id: "36f309b0-7f49-44ac-aba7-6a7405e58545",
});
addMonster({
	section: "Vampires", name: "Vampire Spellcaster",
	size: "Medium", type: "Undead", tags: [ "Shapechanger" ],
	ac: 16, hp: 144, init: 4, cr: "15",
	alignment: alignments.le,
	environments: [ "dungeon", "ruins", "urban" ],
	legendary: true,
	lair: true,
	id: "7298a7a8-a523-49b7-8e60-26e6375cb87f",
});
addMonster({
	section: "Vampires", name: "Vampire Warrior",
	size: "Medium", type: "Undead", tags: [ "Shapechanger" ],
	ac: 18, hp: 144, init: 4, cr: "15",
	alignment: alignments.le,
	environments: [ "dungeon", "ruins", "urban" ],
	legendary: true,
	lair: true,
	id: "1b36ddcf-1c1c-4238-a320-c602f74670f2",
});
addMonster({
	name: "Water Weird",
	size: "Large", type: "Elemental",
	ac: 13, hp: 58, init: 3, cr: "3",
	alignment: alignments.n,
	environments: [ "cave", "coast", "forest", "mountain", "swamp", "underground", "planar" ],
	id: "0414cbe7-742c-4df8-9d4a-51dd1d37210e",
});
addMonster({
	name: "Wight",
	size: "Medium", type: "Undead",
	ac: 14, hp: 45, init: 2, cr: "3",
	alignment: alignments.ne,
	environments: [ "arctic", "cave", "coast", "desert", "dungeon", "forest", "grassland", "mountain", "ruins", "swamp", "underground", "urban" ],
	id: "76b14a0c-551e-4166-9e0a-e06bdb46623d",
});
addMonster({
	name: "Will-o'-Wisp",
	size: "Tiny", type: "Undead",
	ac: 19, hp: 22, init: 9, cr: "2",
	alignment: alignments.ce,
	environments: [ "swamp" ],
	id: "16d4afb3-8246-4709-8308-58d620849408",
});
addMonster({
	name: "Wraith",
	size: "Medium", type: "Undead",
	ac: 13, hp: 67, init: 3, cr: "5",
	alignment: alignments.ne,
	environments: [ "dungeon", "ruins", "swamp", "urban" ],
	id: "e0c0e8f0-bef8-4c76-872b-898a91c27969",
});
addMonster({
	name: "Wyvern",
	size: "Large", type: "Dragon",
	ac: 13, hp: 110, init: 0, cr: "6",
	environments: [ "arctic", "coast", "grassland" ],
	id: "9b9d4516-f2ae-449d-80ba-0ce4e85438cc",
});
addMonster({
	name: "Xorn",
	size: "Medium", type: "Elemental",
	ac: 19, hp: 73, init: 0, cr: "5",
	alignment: alignments.n,
	environments: [ "dungeon", "underground", "planar" ],
	id: "77cbc6b6-3936-4dad-b575-7c45e81e22f9",
});
addMonster({
	section: "Yeti", name: "Abominable Yeti",
	size: "Huge", type: "Monstrosity",
	ac: 15, hp: 137, init: 0, cr: "9",
	alignment: alignments.ce,
	environments: [ "arctic", "cave", "mountain" ],
	id: "52386d70-24c8-461a-ba1f-4fbaccc6d446",
});
addMonster({
	section: "Yeti", name: "Yeti",
	size: "Large", type: "Monstrosity",
	ac: 12, hp: 51, init: 1, cr: "3",
	alignment: alignments.ce,
	environments: [ "arctic", "cave", "mountain" ],
	id: "7686c9ce-acc2-4d30-8729-665c947c153d",
});
addMonster({
	section: "Yuan-ti", name: "Yuan-ti Abomination",
	size: "Large", type: "Monstrosity", tags: [ "Shapechanger", "Yuan-ti" ],
	ac: 15, hp: 127, init: 3, cr: "7",
	alignment: alignments.ne,
	environments: [ "desert", "forest", "mountain", "ruins", "swamp" ],
	id: "36d12747-408b-485c-859e-2d33b9c4d90e",
});
addMonster({
	section: "Yuan-ti", name: "Yuan-ti Malison",
	size: "Medium", type: "Monstrosity", tags: [ "Shapechanger", "Yuan-ti" ],
	ac: 12, hp: 66, init: 2, cr: "3",
	alignment: alignments.ne,
	environments: [ "desert", "forest", "mountain", "ruins", "swamp" ],
	id: "718cb508-899e-46cd-8c26-6271fe470d62",
});
addMonster({
	section: "Yuan-ti", name: "Yuan-ti Pureblood",
	size: "Medium", type: "Monstrosity", tags: [ "Yuan-ti" ],
	ac: 11, hp: 40, init: 1, cr: "1",
	alignment: alignments.ne,
	environments: [ "desert", "forest", "mountain", "ruins", "swamp" ],
	id: "63edeedd-e398-4b1c-b4b8-557286512a8a",
});
addMonster({
	section: "Yugoloths", name: "Arcanaloth",
	size: "Medium", type: "Fiend", tags: [ "Yugoloth" ],
	ac: 17, hp: 104, init: 1, cr: "12",
	alignment: alignments.ne,
	environments: [ "dungeon", "planar" ],
	id: "f9ee20cb-0dff-4585-8f5f-95141f86f9dc",
});
addMonster({
	section: "Yugoloths", name: "Mezzoloth",
	size: "Medium", type: "Fiend", tags: [ "Yugoloth" ],
	ac: 8, hp: 75, init: 0, cr: "5",
	alignment: alignments.ne,
	environments: [ "dungeon", "planar" ],
	id: "911a2153-0fc4-48bd-bb68-4d36ef72cb3c",
});
addMonster({
	section: "Yugoloths", name: "Nycaloth",
	size: "Large", type: "Fiend", tags: [ "Yugoloth" ],
	ac: 18, hp: 123, init: 0, cr: "9",
	alignment: alignments.ne,
	environments: [ "dungeon", "planar" ],
	id: "4ec385e4-55ea-4d7b-af20-513227375d22",
});
addMonster({
	section: "Yugoloths", name: "Ultraloth",
	size: "Medium", type: "Fiend", tags: [ "Yugoloth" ],
	ac: 19, hp: 153, init: 3, cr: "13",
	alignment: alignments.ne,
	environments: [ "dungeon", "planar" ],
	id: "17f653b5-f073-4638-855e-24d4c7f6c249",
});
addMonster({
	section: "Zombies", name: "Beholder Zombie",
	size: "Large", type: "Undead",
	ac: 15, hp: 93, init: -1, cr: "5",
	alignment: alignments.ne,
	environments: [ "cave", "dungeon", "underground" ],
	id: "81191c85-cef0-4782-9e4e-70accdae757e",
});
addMonster({
	section: "Zombies", name: "Ogre Zombie",
	size: "Large", type: "Undead",
	ac: 8, hp: 85, init: -2, cr: "2",
	alignment: alignments.ne,
	environments: [ "dungeon", "forest", "mountain", "swamp" ],
	id: "563daf80-0285-48c5-908b-2dc607550125",
});
addMonster({
	section: "Zombies", name: "Zombie",
	size: "Medium", type: "Undead",
	ac: 8, hp: 22, init: -2, cr: "1/4",
	alignment: alignments.ne,
	environments: [ "aquatic", "arctic", "cave", "coast", "desert", "dungeon", "forest", "grassland", "mountain", "ruins", "swamp", "underground", "urban" ],
	id: "ac42a801-316b-4f28-b552-592d7e751649",
});

// Monster Manual Appendix: Miscellaneous Creatures

addMonster({
	section: "Misc Creatures", name: "Ape",
	size: "Medium", type: "Beast",
	ac: 12, hp: 19, init: 2, cr: "1/2",
	environments: [ "forest" ],
	id: "0788c447-ada3-4bc2-aa38-bc9e08b186d4",
});
addMonster({
	section: "Misc Creatures", name: "Awakened Shrub",
	size: "Small", type: "Plant",
	ac: 9, hp: 10, init: -1, cr: "0",
	environments: [ "forest", "grassland" ],
	id: "0966d112-1f88-45cc-b018-c03103c2b3a0",
});
addMonster({
	section: "Misc Creatures", name: "Awakened Tree",
	size: "Huge", type: "Plant",
	ac: 13, hp: 59, init: -2, cr: "2",
	environments: [ "forest" ],
	id: "98e6eb4b-4998-4a6c-9366-09a82b0c3028",
});
addMonster({
	section: "Misc Creatures", name: "Axe Beak",
	size: "Large", type: "Beast",
	ac: 11, hp: 19, init: 1, cr: "1/4",
	environments: [ "grassland" ],
	id: "62b74702-7ffa-4827-83dc-b97dec26690a",
});
addMonster({
	section: "Misc Creatures", name: "Baboon",
	size: "Small", type: "Beast",
	ac: 12, hp: 3, init: 2, cr: "0",
	environments: [ "forest", "grassland" ],
	id: "f3d4a9b6-622b-4c6c-b809-df565839699c",
});
addMonster({
	section: "Misc Creatures", name: "Badger",
	size: "Tiny", type: "Beast",
	ac: 10, hp: 3, init: 0, cr: "0",
	environments: [ "forest" ],
	id: "e4ca5f7e-4218-4083-a8e0-009b24bd66cb",
});
addMonster({
	section: "Misc Creatures", name: "Bat",
	size: "Tiny", type: "Beast",
	ac: 12, hp: 1, init: 2, cr: "0",
	environments: [ "cave", "forest", "mountain", "underground", "urban" ],
	id: "afee8041-1219-4d31-931d-3c3a08b0b449",
});
addMonster({
	section: "Misc Creatures", name: "Black Bear",
	size: "Medium", type: "Beast",
	ac: 11, hp: 19, init: 0, cr: "1/2",
	environments: [ "cave", "forest", "grassland", "mountain" ],
	id: "a233bc77-4107-456a-89d2-9d91b4ada1a2",
});
addMonster({
	section: "Misc Creatures", name: "Blink Dog",
	size: "Medium", type: "Fey",
	ac: 13, hp: 22, init: 3, cr: "1/4",
	alignment: alignments.lg,
	environments: [ "forest", "grassland" ],
	id: "92452019-5b58-4f07-acdc-89be2ab34c2f",
});
addMonster({
	section: "Misc Creatures", name: "Blood Hawk",
	size: "Small", type: "Beast",
	ac: 12, hp: 7, init: 2, cr: "1/8",
	environments: [ "coast", "grassland", "mountain" ],
	id: "2fd54197-cb28-4dcd-b0b3-adfc90de53f6",
});
addMonster({
	section: "Misc Creatures", name: "Boar",
	size: "Medium", type: "Beast",
	ac: 11, hp: 11, init: 0, cr: "1/4",
	environments: [ "forest", "grassland" ],
	id: "14ef11ed-2340-46de-a4eb-e9932f839f5d",
});
addMonster({
	section: "Misc Creatures", name: "Brown Bear",
	size: "Large", type: "Beast",
	ac: 11, hp: 34, init: 0, cr: "1",
	environments: [ "cave", "forest" ],
	id: "197d96a0-a8c4-48be-af3d-6174ac281afb",
});
addMonster({
	section: "Misc Creatures", name: "Camel",
	size: "Large", type: "Beast",
	ac: 9, hp: 15, init: -1, cr: "1/8",
	environments: [ "desert" ],
	id: "67f7d07c-5002-4768-9586-3ed988bec1e9",
});
addMonster({
	section: "Misc Creatures", name: "Cat",
	size: "Tiny", type: "Beast",
	ac: 12, hp: 2, init: 2, cr: "0",
	environments: [ "urban" ],
	id: "8db064e4-cca6-4757-b558-a7f122ddf06f",
});
addMonster({
	section: "Misc Creatures", name: "Constrictor Snake",
	size: "Large", type: "Beast",
	ac: 12, hp: 13, init: 2, cr: "1/4",
	environments: [ "forest", "swamp" ],
	id: "5ed4761c-b22d-4873-9ad3-31344c34819b",
});
addMonster({
	section: "Misc Creatures", name: "Crab",
	size: "Tiny", type: "Beast",
	ac: 11, hp: 2, init: 0, cr: "0",
	environments: [ "aquatic", "coast" ],
	id: "a92307d2-e938-4ee2-aee7-36eae63e2fc9",
});
addMonster({
	section: "Misc Creatures", name: "Crocodile",
	size: "Large", type: "Beast",
	ac: 12, hp: 19, init: 0, cr: "1/2",
	environments: [ "aquatic", "coast", "swamp" ],
	id: "604dfa7a-4b77-4633-a3ce-83e2c073e0d4",
});
addMonster({
	section: "Misc Creatures", name: "Death Dog",
	size: "Medium", type: "Monstrosity",
	ac: 12, hp: 39, init: 2, cr: "1",
	alignment: alignments.ne,
	environments: [ "desert", "grassland", "underground" ],
	id: "3f109065-752c-496c-9169-b2ab3399126b",
});
addMonster({
	section: "Misc Creatures", name: "Deer",
	size: "Medium", type: "Beast",
	ac: 13, hp: 4, init: 3, cr: "0",
	environments: [ "forest", "grassland" ],
	id: "ba54ab80-5007-4695-9f82-003a88cfdeeb",
});
addMonster({
	section: "Misc Creatures", name: "Dire Wolf",
	size: "Large", type: "Beast",
	ac: 14, hp: 37, init: 2, cr: "1",
	environments: [ "arctic", "cave", "forest", "grassland" ],
	id: "9a507770-7644-4486-b73e-ca04b78d2e43",
});
addMonster({
	section: "Misc Creatures", name: "Draft Horse",
	size: "Large", type: "Beast",
	ac: 10, hp: 19, init: 0, cr: "1/4",
	environments: [ "urban" ],
	id: "46979307-705f-43e6-be68-7f72c936b1ba",
});
addMonster({
	section: "Misc Creatures", name: "Eagle",
	size: "Small", type: "Beast",
	ac: 12, hp: 3, init: 2, cr: "0",
	environments: [ "arctic", "grassland", "mountain" ],
	id: "2b990f56-68e4-4c1c-8905-c1a05269beeb",
});
addMonster({
	section: "Misc Creatures", name: "Elephant",
	size: "Huge", type: "Beast",
	ac: 12, hp: 76, init: -1, cr: "4",
	environments: [ "grassland" ],
	id: "45934b57-b2f7-4bce-bc98-0af4e1233b62",
});
addMonster({
	section: "Misc Creatures", name: "Elk",
	size: "Large", type: "Beast",
	ac: 10, hp: 13, init: 0, cr: "1/4",
	environments: [ "forest", "grassland" ],
	id: "eb4b6767-1035-48a2-8a66-b9e2572e2322",
});
addMonster({
	section: "Misc Creatures", name: "Flying Snake",
	size: "Tiny", type: "Beast",
	ac: 14, hp: 5, init: 4, cr: "1/8",
	environments: [ "forest", "swamp" ],
	id: "6afa4798-b9c5-4139-adeb-55eaba3e9cdb",
});
addMonster({
	section: "Misc Creatures", name: "Frog",
	size: "Tiny", type: "Beast",
	ac: 11, hp: 1, init: 1, cr: "0",
	environments: [ "aquatic", "coast", "forest", "swamp" ],
	id: "303172de-265f-4046-bf47-2aff0f444f6e",
});
addMonster({
	section: "Misc Creatures", name: "Giant Ape",
	size: "Huge", type: "Beast",
	ac: 12, hp: 157, init: 2, cr: "7",
	environments: [ "forest" ],
	id: "4115f79a-084f-4775-b821-2b7ce6fc60d6",
});
addMonster({
	section: "Misc Creatures", name: "Giant Badger",
	size: "Medium", type: "Beast",
	ac: 10, hp: 13, init: 0, cr: "1/4",
	environments: [ "forest", "grassland" ],
	id: "2a435613-2ac3-4486-90e6-e62e2efce0ec",
});
addMonster({
	section: "Misc Creatures", name: "Giant Bat",
	size: "Large", type: "Beast",
	ac: 13, hp: 22, init: 3, cr: "1/4",
	environments: [ "cave", "dungeon", "forest", "ruins", "swamp", "underground" ],
	id: "f96d5318-3768-4f78-b800-6cc36f474c0a",
});
addMonster({
	section: "Misc Creatures", name: "Giant Boar",
	size: "Large", type: "Beast",
	ac: 12, hp: 42, init: 0, cr: "2",
	environments: [ "forest", "grassland" ],
	id: "bcc30ff0-0853-456b-961e-c23a7236b979",
});
addMonster({
	section: "Misc Creatures", name: "Giant Centipede",
	size: "Small", type: "Beast",
	ac: 13, hp: 4, init: 2, cr: "1/4",
	environments: [ "cave", "desert", "dungeon", "forest", "grassland", "mountain", "ruins", "swamp", "underground" ],
	id: "98ec83af-5011-4e90-b17e-7885df911032",
});
addMonster({
	section: "Misc Creatures", name: "Giant Constrictor Snake",
	size: "Huge", type: "Beast",
	ac: 12, hp: 60, init: 2, cr: "2",
	environments: [ "forest", "grassland", "swamp" ],
	id: "f2d2909a-895b-4f43-89eb-5a17a5f129c3",
});
addMonster({
	section: "Misc Creatures", name: "Giant Crab",
	size: "Medium", type: "Beast",
	ac: 15, hp: 13, init: 2, cr: "1/8",
	environments: [ "aquatic", "coast" ],
	id: "df3f2dc9-40e2-48f3-9d40-a62a57dd0492",
});
addMonster({
	section: "Misc Creatures", name: "Giant Crocodile",
	size: "Huge", type: "Beast",
	ac: 14, hp: 85, init: -1, cr: "5",
	environments: [ "aquatic", "coast", "swamp" ],
	id: "2408c546-fa02-40e0-9264-08d13fe5386c",
});
addMonster({
	section: "Misc Creatures", name: "Giant Eagle",
	size: "Large", type: "Beast",
	ac: 13, hp: 26, init: 3, cr: "1",
	alignment: alignments.ng,
	environments: [ "grassland", "mountain" ],
	id: "a02c80fc-b950-4e71-be07-2a3b28a126a4",
});
addMonster({
	section: "Misc Creatures", name: "Giant Elk",
	size: "Huge", type: "Beast",
	ac: 14, hp: 42, init: 3, cr: "2",
	environments: [ "forest", "grassland" ],
	id: "68039952-d660-43e4-8949-ae6eb04606b6",
});
addMonster({
	section: "Misc Creatures", name: "Giant Fire Beetle",
	size: "Small", type: "Beast",
	ac: 13, hp: 4, init: 0, cr: "0",
	environments: [ "cave", "desert", "dungeon", "forest", "grassland", "mountain", "ruins", "swamp", "underground" ],
	id: "3b66d494-fe9b-411c-8e8e-d8f384c41ef8",
});
addMonster({
	section: "Misc Creatures", name: "Giant Frog",
	size: "Medium", type: "Beast",
	ac: 11, hp: 18, init: 1, cr: "1/4",
	environments: [ "aquatic", "coast", "forest", "swamp" ],
	id: "7a608516-9ef3-4bf3-85c6-45837c61a77e",
});
addMonster({
	section: "Misc Creatures", name: "Giant Goat",
	size: "Large", type: "Beast",
	ac: 11, hp: 19, init: 0, cr: "1/2",
	environments: [ "forest", "grassland", "mountain" ],
	id: "6589f3c5-4596-4fd4-b69c-94be539aade0",
});
addMonster({
	section: "Misc Creatures", name: "Giant Hyena",
	size: "Large", type: "Beast",
	ac: 12, hp: 45, init: 2, cr: "1",
	environments: [ "coast", "desert", "forest", "grassland" ],
	id: "d56e1457-2295-4bfd-b1d6-d84e53d6debc",
});
addMonster({
	section: "Misc Creatures", name: "Giant Lizard",
	size: "Large", type: "Beast",
	ac: 12, hp: 19, init: 1, cr: "1/4",
	environments: [ "cave", "desert", "dungeon", "forest", "grassland", "mountain", "ruins", "swamp", "underground" ],
	id: "b1e3ee1f-d616-412d-ab5e-10aad27b2476",
});
addMonster({
	section: "Misc Creatures", name: "Giant Octopus",
	size: "Large", type: "Beast",
	ac: 11, hp: 52, init: 1, cr: "1",
	environments: [ "aquatic" ],
	id: "0dcde23a-8100-4855-ac07-3388d1b8cc40",
});
addMonster({
	section: "Misc Creatures", name: "Giant Owl",
	size: "Large", type: "Beast",
	ac: 12, hp: 19, init: 2, cr: "1/4",
	alignment: alignments.n,
	environments: [ "forest", "grassland", "urban" ],
	id: "0f0d61e7-2a8f-47c6-b1c9-35d7390dd6bb",
});
addMonster({
	section: "Misc Creatures", name: "Giant Poisonous Snake",
	size: "Medium", type: "Beast",
	ac: 14, hp: 11, init: 4, cr: "1/4",
	environments: [ "forest", "grassland", "swamp" ],
	id: "ab030d7f-8e46-4167-bf36-45ff59a95665",
});
addMonster({
	section: "Misc Creatures", name: "Giant Rat",
	size: "Small", type: "Beast",
	ac: 12, hp: 7, init: 2, cr: "1/8",
	environments: [ "cave", "dungeon", "forest", "grassland", "mountain", "ruins", "swamp", "underground", "urban" ],
	id: "dd4df726-a041-4058-ac44-225aab9be366",
});
addMonster({
	section: "Misc Creatures", name: "Giant Scorpion",
	size: "Large", type: "Beast",
	ac: 15, hp: 52, init: 1, cr: "3",
	environments: [ "cave", "coast", "desert", "dungeon", "grassland", "ruins", "swamp", "underground" ],
	id: "ff4ee842-7c21-4d0e-b6ff-d72dc13913db",
});
addMonster({
	section: "Misc Creatures", name: "Giant Sea Horse",
	size: "Large", type: "Beast",
	ac: 13, hp: 16, init: 2, cr: "1/2",
	environments: [ "aquatic" ],
	id: "2fe6b60e-017f-40fa-9746-44e5b9f6bb2d",
});
addMonster({
	section: "Misc Creatures", name: "Giant Shark",
	size: "Huge", type: "Beast",
	ac: 13, hp: 126, init: 0, cr: "5",
	environments: [ "aquatic" ],
	id: "4d78880d-7eae-4494-ac22-e0bf415e32ad",
});
addMonster({
	section: "Misc Creatures", name: "Giant Spider",
	size: "Large", type: "Beast",
	ac: 14, hp: 26, init: 3, cr: "1",
	environments: [ "cave", "coast", "desert", "dungeon", "forest", "grassland", "mountain", "ruins", "swamp", "underground", "urban" ],
	id: "ceff6967-7d2c-4b84-9e2a-df1d36a9a98c",
});
addMonster({
	section: "Misc Creatures", name: "Giant Toad",
	size: "Large", type: "Beast",
	ac: 11, hp: 39, init: 1, cr: "1",
	environments: [ "aquatic", "coast", "forest", "swamp" ],
	id: "dfd9f55f-e53c-4abb-b761-144062af6d0d",
});
addMonster({
	section: "Misc Creatures", name: "Giant Vulture",
	size: "Large", type: "Beast",
	ac: 10, hp: 22, init: 13, cr: "1",
	alignment: alignments.ne,
	environments: [ "desert", "grassland", "ruins" ],
	id: "6b6e5aa1-bc01-4af6-b64a-8ac3f468eaf7",
});
addMonster({
	section: "Misc Creatures", name: "Giant Wasp",
	size: "Medium", type: "Beast",
	ac: 12, hp: 13, init: 2, cr: "1/2",
	environments: [ "forest" ],
	id: "ff490947-a963-4c11-8a1c-f238f4f6ad27",
});
addMonster({
	section: "Misc Creatures", name: "Giant Weasel",
	size: "Medium", type: "Beast",
	ac: 13, hp: 9, init: 3, cr: "1/8",
	environments: [ "forest", "grassland" ],
	id: "a30c0261-68cd-4b59-8bf6-c47bbde26f36",
});
addMonster({
	section: "Misc Creatures", name: "Giant Wolf Spider",
	size: "Medium", type: "Beast",
	ac: 13, hp: 11, init: 3, cr: "1/4",
	environments: [ "cave", "coast", "desert", "dungeon", "forest", "grassland", "mountain", "ruins", "swamp", "underground", "urban" ],
	id: "f51ac131-dfc5-4672-a569-ab361ac31447",
});
addMonster({
	section: "Misc Creatures", name: "Goat",
	size: "Medium", type: "Beast",
	ac: 10, hp: 4, init: 0, cr: "0",
	environments: [ "grassland", "urban" ],
	id: "4407c527-3be7-4010-b51d-a777203e49e1",
});
addMonster({
	section: "Misc Creatures", name: "Hawk",
	size: "Tiny", type: "Beast",
	ac: 13, hp: 1, init: 3, cr: "0",
	environments: [ "grassland", "mountain" ],
	id: "d2ebaf9c-3be0-4c0c-ac98-c65e6d80b741",
});
addMonster({
	section: "Misc Creatures", name: "Hunter Shark",
	size: "Large", type: "Beast",
	ac: 12, hp: 45, init: 1, cr: "2",
	environments: [ "aquatic" ],
	id: "3cbfec14-c628-4140-82ce-8cb47cfcdb98",
});
addMonster({
	section: "Misc Creatures", name: "Hyena",
	size: "Medium", type: "Beast",
	ac: 11, hp: 5, init: 1, cr: "0",
	environments: [ "forest", "grassland" ],
	id: "589c5ae5-bbbe-4753-a36a-53bfec6987b7",
});
addMonster({
	section: "Misc Creatures", name: "Jackal",
	size: "Small", type: "Beast",
	ac: 12, hp: 3, init: 2, cr: "0",
	environments: [ "desert", "grassland" ],
	id: "d8e388da-90a9-48b5-8d84-f969f5b98a73",
});
addMonster({
	section: "Misc Creatures", name: "Killer Whale",
	size: "Huge", type: "Beast",
	ac: 12, hp: 90, init: 0, cr: "3",
	environments: [ "aquatic" ],
	id: "7ff7ffda-0e4d-4989-9c61-455178874d43",
});
addMonster({
	section: "Misc Creatures", name: "Lion",
	size: "Large", type: "Beast",
	ac: 12, hp: 26, init: 2, cr: "1",
	environments: [ "grassland" ],
	id: "2feb4531-2954-456c-bdf2-b320b1b8d1a3",
});
addMonster({
	section: "Misc Creatures", name: "Lizard",
	size: "Tiny", type: "Beast",
	ac: 10, hp: 2, init: 0, cr: "0",
	environments: [ "cave", "desert", "dungeon", "forest", "grassland", "mountain", "ruins", "swamp", "underground" ],
	id: "c9c0dd9a-d2ce-449c-9bd8-46da79cacdc3",
});
addMonster({
	section: "Misc Creatures", name: "Mammoth",
	size: "Huge", type: "Beast",
	ac: 13, hp: 126, init: -1, cr: "6",
	environments: [ "arctic" ],
	id: "723492cc-2dc4-4c3e-b5a3-96b03dd30320",
});
addMonster({
	section: "Misc Creatures", name: "Mastiff",
	size: "Medium", type: "Beast",
	ac: 12, hp: 5, init: 2, cr: "1/8",
	environments: [ "urban" ],
	id: "216f1424-504a-4c7f-8a0a-478bbf97f1ef",
});
addMonster({
	section: "Misc Creatures", name: "Mule",
	size: "Medium", type: "Beast",
	ac: 10, hp: 11, init: 0, cr: "1/8",
	environments: [ "urban" ],
	id: "40e39910-dd75-41ac-a5b2-217d3d4e81de",
});
addMonster({
	section: "Misc Creatures", name: "Octopus",
	size: "Small", type: "Beast",
	ac: 12, hp: 3, init: 2, cr: "0",
	environments: [ "aquatic" ],
	id: "61154806-be2a-432b-953f-cd660073496b",
});
addMonster({
	section: "Misc Creatures", name: "Owl",
	size: "Tiny", type: "Beast",
	ac: 11, hp: 1, init: 1, cr: "0",
	environments: [ "forest", "urban" ],
	id: "5b060b59-1142-4d65-9958-212dbce27820",
});
addMonster({
	section: "Misc Creatures", name: "Panther",
	size: "Medium", type: "Beast",
	ac: 12, hp: 13, init: 2, cr: "1/4",
	environments: [ "forest" ],
	id: "777fa0ec-7cd3-497e-9a64-d5bf89ac6216",
});
addMonster({
	section: "Misc Creatures", name: "Phase Spider",
	size: "Large", type: "Monstrosity",
	ac: 13, hp: 32, init: 2, cr: "3",
	environments: [ "cave", "coast", "dungeon", "forest", "grassland", "mountain", "ruins", "swamp", "underground", "planar" ],
	id: "9f50717c-0766-4e2e-b218-7605ccb0d945",
});
addMonster({
	section: "Misc Creatures", name: "Poisonous Snake",
	size: "Tiny", type: "Beast",
	ac: 13, hp: 2, init: 3, cr: "1/8",
	environments: [ "desert", "forest", "grassland", "swamp" ],
	id: "e23e499c-9022-482c-ae28-21790a692aab",
});
addMonster({
	section: "Misc Creatures", name: "Polar Bear",
	size: "Large", type: "Beast",
	ac: 12, hp: 42, init: 0, cr: "2",
	environments: [ "arctic", "cave" ],
	id: "f2a7ac7e-972f-4956-908e-525eec2ae47c",
});
addMonster({
	section: "Misc Creatures", name: "Pony",
	size: "Medium", type: "Beast",
	ac: 10, hp: 11, init: 0, cr: "1/8",
	environments: [ "grassland" ],
	id: "18f9d16d-6151-45fc-b449-5ca10e66f49e",
});
addMonster({
	section: "Misc Creatures", name: "Quipper",
	size: "Tiny", type: "Beast",
	ac: 13, hp: 1, init: 3, cr: "0",
	environments: [ "aquatic" ],
	id: "33980992-7042-4c16-8ffb-d784114520d6",
});
addMonster({
	section: "Misc Creatures", name: "Rat",
	size: "Tiny", type: "Beast",
	ac: 10, hp: 1, init: 0, cr: "0",
	environments: [ "arctic", "cave", "coast", "dungeon", "forest", "grassland", "mountain", "ruins", "swamp", "underground", "urban" ],
	id: "b01dae8d-020f-4ee2-a80a-de7cb133de53",
});
addMonster({
	section: "Misc Creatures", name: "Raven",
	size: "Tiny", type: "Beast",
	ac: 12, hp: 1, init: 2, cr: "0",
	environments: [ "forest", "grassland" ],
	id: "cda02d73-dca4-45bb-92cb-ad2092a27ea5",
});
addMonster({
	section: "Misc Creatures", name: "Reef Shark",
	size: "Medium", type: "Beast",
	ac: 12, hp: 22, init: 1, cr: "1/2",
	environments: [ "aquatic" ],
	id: "75d4dfd5-8942-4661-b8a8-3fbcaec7d1ab",
});
addMonster({
	section: "Misc Creatures", name: "Rhinoceros",
	size: "Large", type: "Beast",
	ac: 11, hp: 45, init: -1, cr: "2",
	environments: [ "grassland" ],
	id: "73254529-1dde-443a-9cbd-940157812fb1",
});
addMonster({
	section: "Misc Creatures", name: "Riding Horse",
	size: "Large", type: "Beast",
	ac: 10, hp: 13, init: 0, cr: "1/4",
	environments: [ "urban" ],
	id: "e02034e2-fe58-4c02-bdb6-9a54baf6e86b",
});
addMonster({
	section: "Misc Creatures", name: "Saber-Toothed Tiger",
	size: "Large", type: "Beast",
	ac: 12, hp: 52, init: 2, cr: "2",
	environments: [ "forest", "grassland" ],
	id: "e8fb3a4e-52e3-4519-bfe4-2710fca7aca2",
});
addMonster({
	section: "Misc Creatures", name: "Scorpion",
	size: "Tiny", type: "Beast",
	ac: 11, hp: 1, init: 0, cr: "0",
	environments: [ "cave", "desert", "grassland", "mountain", "swamp" ],
	id: "d30a64ee-ac17-42e5-99ff-2186111615ad",
});
addMonster({
	section: "Misc Creatures", name: "Sea Horse",
	size: "Tiny", type: "Beast",
	ac: 11, hp: 1, init: 1, cr: "0",
	environments: [ "aquatic" ],
	id: "ec2f7099-286e-4384-990a-526cf70b1c55",
});
addMonster({
	section: "Misc Creatures", name: "Spider",
	size: "Tiny", type: "Beast",
	ac: 12, hp: 1, init: 2, cr: "0",
	environments: [ "cave", "coast", "dungeon", "forest", "grassland", "mountain", "ruins", "swamp", "underground", "planar" ],
	id: "5cf71994-66bd-433e-ae5f-d20071c48d85",
});
addMonster({
	section: "Misc Creatures", name: "Swarm of Bats",
	size: "Medium", type: "Beast", tags: [ "Swarm" ],
	ac: 12, hp: 22, init: 2, cr: "1/4",
	environments: [ "cave", "dungeon", "forest", "ruins", "swamp", "underground", "urban" ],
	id: "c5cc5a1a-d412-40d3-9537-f22aa625f893",
});
addMonster({
	section: "Misc Creatures", name: "Swarm of Insects",
	size: "Medium", type: "Beast", tags: [ "Swarm" ],
	ac: 12, hp: 22, init: 1, cr: "1/2",
	environments: [ "cave", "dungeon", "forest", "grassland", "mountain", "ruins", "swamp", "underground", "urban" ],
	id: "e3b72f35-5e72-4bfa-b238-f22062184c1c",
});
addMonster({
	section: "Misc Creatures", name: "Swarm of Poisonous Snakes",
	size: "Medium", type: "Beast", tags: [ "Swarm" ],
	ac: 14, hp: 36, init: 4, cr: "2",
	environments: [ "desert", "dungeon", "forest", "grassland", "swamp" ],
	id: "c37dd213-9373-41af-9c87-e27513d16ec5",
});
addMonster({
	section: "Misc Creatures", name: "Swarm of Quippers",
	size: "Medium", type: "Beast", tags: [ "Swarm" ],
	ac: 13, hp: 28, init: 3, cr: "1",
	environments: [ "aquatic" ],
	id: "d74a782b-6b71-4c9c-95d0-f8d61bb97e44",
});
addMonster({
	section: "Misc Creatures", name: "Swarm of Rats",
	size: "Medium", type: "Beast", tags: [ "Swarm" ],
	ac: 10, hp: 24, init: 0, cr: "1/4",
	environments: [ "cave", "dungeon", "forest", "grassland", "ruins", "swamp", "urban" ],
	id: "31c042ca-f348-4ba5-a749-bb659b296f8f",
});
addMonster({
	section: "Misc Creatures", name: "Swarm of Ravens",
	size: "Medium", type: "Beast", tags: [ "Swarm" ],
	ac: 12, hp: 24, init: 2, cr: "1/4",
	environments: [ "forest", "grassland", "mountain", "ruins", "urban" ],
	id: "adcec956-ebf2-42c3-9e60-4ec3f58c17e2",
});
addMonster({
	section: "Misc Creatures", name: "Tiger",
	size: "Large", type: "Beast",
	ac: 12, hp: 37, init: 2, cr: "1",
	environments: [ "forest", "grassland" ],
	id: "d0a5fb54-32bb-4704-ac1a-862a175d333b",
});
addMonster({
	section: "Misc Creatures", name: "Vulture",
	size: "Medium", type: "Beast",
	ac: 10, hp: 5, init: 0, cr: "0",
	environments: [ "desert", "grassland", "ruins" ],
	id: "b2f6a630-d8e2-42f5-8844-5a346f55c272",
});
addMonster({
	section: "Misc Creatures", name: "Warhorse",
	size: "Large", type: "Beast",
	ac: 11, hp: 19, init: 1, cr: "1/2",
	environments: [ "grassland", "urban" ],
	id: "8d0e875b-95f1-47a5-9d98-72ac4738c860",
});
addMonster({
	section: "Misc Creatures", name: "Weasel",
	size: "Tiny", type: "Beast",
	ac: 13, hp: 1, init: 3, cr: "0",
	environments: [ "grassland" ],
	id: "3306e2fd-7249-45d6-abcd-1797c8d8ca30",
});
addMonster({
	section: "Misc Creatures", name: "Winter Wolf",
	size: "Large", type: "Monstrosity",
	ac: 13, hp: 75, init: 1, cr: "3",
	alignment: alignments.ne,
	environments: [ "arctic", "cave", "forest", "grassland" ],
	id: "4da5597e-8f29-4fce-a4e7-d36ba2c5b6a7",
});
addMonster({
	section: "Misc Creatures", name: "Wolf",
	size: "Medium", type: "Beast",
	ac: 13, hp: 11, init: 2, cr: "1/4",
	environments: [ "arctic", "cave", "forest", "grassland" ],
	id: "9e4c024d-0b8b-40c7-9e4a-2b447450ab4e",
});
addMonster({
	section: "Misc Creatures", name: "Worg",
	size: "Large", type: "Monstrosity",
	ac: 13, hp: 26, init: 1, cr: "1/2",
	alignment: alignments.ne,
	environments: [ "arctic", "cave", "forest", "grassland" ],
	id: "1d37bafc-ea8e-40e5-8546-475276cc903f",
});

// Monster Manual Appendix: Nonplayer Characters

addMonster({
	section: "NPCs", name: "Acolyte",
	size: "Medium", type: "Humanoid", tags: [ "any" ],
	ac: 10, hp: 9, init: 0, cr: "1/4",
	alignment: alignments.any,
	environments: [ "arctic", "desert", "dungeon", "forest", "grassland", "mountain", "swamp", "underground", "urban" ],
	id: "f88906c2-146d-4abb-8537-8bf5e1d0ac97",
});
addMonster({
	section: "NPCs", name: "Archmage",
	size: "Medium", type: "Humanoid", tags: [ "any" ],
	ac: "12 (15 with mage armor)", hp: 99, init: 2, cr: "12",
	alignment: alignments.any,
	environments: [ "ruins", "urban" ],
	id: "d4aec3c5-0b0a-4fff-b77b-fe7c900d7d31",
});
addMonster({
	section: "NPCs", name: "Assassin",
	size: "Medium", type: "Humanoid", tags: [ "any" ],
	ac: 15, hp: 78, init: 3, cr: "8",
	alignment: alignments.non_good,
	environments: [ "arctic", "cave", "coast", "desert", "dungeon", "forest", "grassland", "mountain", "ruins", "swamp", "underground", "urban" ],
	id: "f42ac24e-7196-4ba4-ae4a-3e34a744d3de",
});
addMonster({
	section: "NPCs", name: "Bandit",
	size: "Medium", type: "Humanoid", tags: [ "any" ],
	ac: 12, hp: 11, init: 1, cr: "1/8",
	alignment: alignments.non_lawful,
	environments: [ "arctic", "coast", "desert", "forest", "grassland", "mountain", "ruins", "urban" ],
	id: "d9d4ae84-bf86-4b94-9806-1b32f5cc69aa",
});
addMonster({
	section: "NPCs", name: "Bandit Captain",
	size: "Medium", type: "Humanoid", tags: [ "any" ],
	ac: 15, hp: 65, init: 3, cr: "2",
	alignment: alignments.non_lawful,
	environments: [ "arctic", "coast", "desert", "forest", "grassland", "mountain", "ruins", "urban" ],
	id: "f0109337-c855-4795-946c-93c92d97df29",
});
addMonster({
	section: "NPCs", name: "Berserker",
	size: "Medium", type: "Humanoid", tags: [ "any" ],
	ac: 13, hp: 67, init: 1, cr: "2",
	alignment: alignments.any_chaotic,
	environments: [ "arctic", "cave", "desert", "forest", "grassland", "mountain", "swamp", "urban" ],
	id: "8f6ae154-74f1-4ae2-b165-54f109fa2733",
});
addMonster({
	section: "NPCs", name: "Commoner",
	size: "Medium", type: "Humanoid", tags: [ "any" ],
	ac: 10, hp: 4, init: 0, cr: "0",
	alignment: alignments.any,
	environments: [ "urban" ],
	id: "a5f5b9e0-71af-4788-a471-7135557c8321",
});
addMonster({
	section: "NPCs", name: "Cult Fanatic",
	size: "Medium", type: "Humanoid", tags: [ "any" ],
	ac: 13, hp: 33, init: 2, cr: "2",
	alignment: alignments.non_good,
	environments: [ "dungeon", "urban" ],
	id: "57f917eb-d654-4a66-b1ca-400245e59fc8",
});
addMonster({
	section: "NPCs", name: "Cultist",
	size: "Medium", type: "Humanoid", tags: [ "any" ],
	ac: 12, hp: 9, init: 1, cr: "1/8",
	alignment: alignments.non_good,
	environments: [ "dungeon", "urban" ],
	id: "51bea60c-7686-4bc7-8964-46c75e6953ff",
});
addMonster({
	section: "NPCs", name: "Druid",
	size: "Medium", type: "Humanoid", tags: [ "any" ],
	ac: 11, hp: 27, init: 1, cr: "2",
	alignment: alignments.any,
	environments: [ "arctic", "cave", "coast", "desert", "forest", "grassland", "mountain", "swamp", "underground" ],
	id: "aa328a81-cbcb-4800-96d4-3f9f7cc021f3",
});
addMonster({
	section: "NPCs", name: "Gladiator",
	size: "Medium", type: "Humanoid", tags: [ "any" ],
	ac: 16, hp: 112, init: 2, cr: "5",
	alignment: alignments.any,
	environments: [ "urban" ],
	id: "95c84527-c3f5-41df-a449-3f9c2cb56953",
});
addMonster({
	section: "NPCs", name: "Guard",
	size: "Medium", type: "Humanoid", tags: [ "any" ],
	ac: 16, hp: 11, init: 1, cr: "1/8",
	alignment: alignments.any,
	environments: [ "urban" ],
	id: "2dfd127c-8844-4289-ac04-b4fe2f1656e4",
});
addMonster({
	section: "NPCs", name: "Knight",
	size: "Medium", type: "Humanoid", tags: [ "any" ],
	ac: 18, hp: 52, init: 0, cr: "3",
	alignment: alignments.any,
	environments: [ "urban" ],
	id: "9094f81d-5fab-43c6-baf5-4a5acbe94b9b",
});
addMonster({
	section: "NPCs", name: "Mage",
	size: "Medium", type: "Humanoid", tags: [ "any" ],
	ac: "12 (15 with mage armor)", hp: 40, init: 2, cr: "6",
	alignment: alignments.any,
	environments: [ "urban" ],
	id: "dd58be51-e15c-4abb-8cf4-97263526d5d5",
});
addMonster({
	section: "NPCs", name: "Noble",
	size: "Medium", type: "Humanoid", tags: [ "any" ],
	ac: 15, hp: 9, init: 1, cr: "1/8",
	alignment: alignments.any,
	environments: [ "urban" ],
	id: "f9a076f4-da7e-457a-912e-9fe8d752ef3e",
});
addMonster({
	section: "NPCs", name: "Priest",
	size: "Medium", type: "Humanoid", tags: [ "any" ],
	ac: 13, hp: 27, init: 0, cr: "2",
	alignment: alignments.any,
	environments: [ "urban" ],
	id: "cc9e3c32-1c13-40a5-9d06-0ded81c4e3cb",
});
addMonster({
	section: "NPCs", name: "Scout",
	size: "Medium", type: "Humanoid", tags: [ "any" ],
	ac: 13, hp: 16, init: 2, cr: "1/2",
	alignment: alignments.any,
	environments: [ "arctic", "coast", "desert", "forest", "grassland", "mountain", "swamp" ],
	id: "14f5f317-1640-4254-b8d7-4d2dadb97394",
});
addMonster({
	section: "NPCs", name: "Spy",
	size: "Medium", type: "Humanoid", tags: [ "any" ],
	ac: 12, hp: 27, init: 2, cr: "1",
	alignment: alignments.any,
	environments: [ "arctic", "cave", "coast", "desert", "forest", "grassland", "mountain", "ruins", "swamp", "urban" ],
	id: "a9524fbf-b1e5-4ca4-9f79-f4e494f93bcb",
});
addMonster({
	section: "NPCs", name: "Thug",
	size: "Medium", type: "Humanoid", tags: [ "any" ],
	ac: 11, hp: 32, init: 0, cr: "1/2",
	alignment: alignments.non_good,
	environments: [ "arctic", "cave", "coast", "forest", "grassland", "urban" ],
	id: "9d458fc1-a489-49f8-9417-1c6c495d5e98",
});
addMonster({
	section: "NPCs", name: "Tribal Warrior",
	size: "Medium", type: "Humanoid", tags: [ "any" ],
	ac: 12, hp: 11, init: 0, cr: "1/8",
	alignment: alignments.any,
	environments: [ "arctic", "cave", "desert", "forest", "grassland", "mountain", "swamp" ],
	id: "183f147b-1fa5-4495-8641-d655c57dbd07",
});
addMonster({
	section: "NPCs", name: "Veteran",
	size: "Medium", type: "Humanoid", tags: [ "any" ],
	ac: 17, hp: 58, init: 1, cr: "3",
	alignment: alignments.any,
	environments: [ "urban" ],
	id: "595c04c7-7c4d-442a-932a-22be86d294c9",
});

// Hoard of the Dragon Queen

addMonster({
	name: "Ambush Drake",
	size: "Medium", type: "Dragon",
	ac: 13, hp: 22, init: 2, cr: "1/2",
	environments: [ "cave", "dungeon", "forest", "mountain", "ruins", "swamp", "urban" ],
	id: "f495d63f-f936-4985-a2d3-6a8ec2a20fb0",
});
addMonster({
	name: "Dragonclaw",
	size: "Medium", type: "Humanoid", tags: [ "Human" ],
	ac: 14, hp: 16, init: 3, cr: "1",
	alignment: alignments.ne,
	environments: [ "dungeon", "urban" ],
	id: "ddb767bf-4484-4d5e-b54d-b03a6f9c6795",
});
addMonster({
	name: "Dragonwing",
	size: "Medium", type: "Humanoid", tags: [ "Human" ],
	ac: 14, hp: 32, init: 3, cr: "2",
	alignment: alignments.ne,
	environments: [ "dungeon", "urban" ],
	id: "3bb548b6-e049-4355-84cb-47bc1d94620a",
});
addMonster({
	name: "Guard Drake",
	size: "Medium", type: "Dragon",
	ac: 14, hp: 52, init: 0, cr: "2",
	environments: [ "dungeon", "urban" ],
	id: "8f11d800-1103-492b-ae24-320ef1013644",
});
