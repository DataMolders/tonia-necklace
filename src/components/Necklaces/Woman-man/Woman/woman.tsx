import React, { useState } from "react";
import styles from "./Woman.module.scss";
import Image, { StaticImageData } from "next/image";
import woman1 from "../../../../assets/images/woman-necklances/womannecklace1.jpg";
import woman2 from "../../../../assets/images/woman-necklances/womannecklace2.jpg";
import woman3 from "../../../../assets/images/woman-necklances/womannecklace3.jpg";
import woman4 from "../../../../assets/images/woman-necklances/womannecklace4.jpg";
import woman5 from "../../../../assets/images/woman-necklances/womannecklace5.jpg";
import woman6 from "../../../../assets/images/woman-necklances/womannecklace6.jpg";
import woman7 from "../../../../assets/images/woman-necklances/womannecklace7.jpg";
import woman8 from "../../../../assets/images/woman-necklances/womannecklace8.jpg";
import woman9 from "../../../../assets/images/woman-necklances/womannecklace9.jpg";
import woman10 from "../../../../assets/images/woman-necklances/womannecklace10.jpg";
import woman11 from "../../../../assets/images/woman-necklances/womannecklace11.jpg";
import woman12 from "../../../../assets/images/woman-necklances/womannecklace12.jpg";
import woman13 from "../../../../assets/images/woman-necklances/womannecklace13.jpg";
import woman14 from "../../../../assets/images/woman-necklances/womannecklace14.jpg";
import woman15 from "../../../../assets/images/woman-necklances/womannecklace15.jpg";
// https://nextjs.org/docs/pages/building-your-application/optimizing/images#loader HAY QUE HACER ESTA MIERDA
import Detail from "./Detail/Detail";

interface neckLace {
  image: StaticImageData;
  name: string;
  description: string;
}

function Woman() {
  const [showDetails, setShowDetails] = useState(false);
  const [index, setIndex] = useState(0);
  const [currentNecklace, setCurrentNecklace] = useState<neckLace>();

  const toggleViewDetails = (index: number) => {
    setIndex(index);
    setCurrentNecklace(neckLaceList[index]);
    setShowDetails(true);
  };

  const increaseIndex: any = () => {
    if (index < neckLaceList.length - 1) {
      setIndex(index + 1);
      setCurrentNecklace(neckLaceList[index + 1]);
    }
  };

  const decreaseIndex: any = () => {
    if (index > 0) {
      setIndex(index - 1);
      setCurrentNecklace(neckLaceList[index - 1]);
    }
  };

  let neckLaceList: neckLace[] = [
    {
      image: woman1,
      name: "ROMAN HEAD",
      description:
        "The central bronze bead found at an antique dealer in Mali resembles a Roman head. The black lava beads from the Canary Islands enhance multicolored glass beads from Venice, called 'King beads' because they were very popular with royalty. They were made in the first half of the 19th century and were used for trade with Africa. Small Mediterranean corals add a touch of contrast. ⁣ © Fodé Koné⁣",
    },
    {
      image: woman2,
      name: "AGGRAB",
      description:
        "Beautiful green stones of amazonite, some of them dating from neolithic times. Amazonite is found from Morocco to Saudi Arabia and is very much valued by people of the desert. Silver beads from Mauritania called aggrab el fadda which roughly translates as “bag made out of a goat”. These bags are still used in areas of North Africa to store and transport water. The beads are created by hammering thin silver sheets. Mauritanian woman usually adorn their hair with those beads. © Fodé Koné⁣⁣",
    },
    {
      image: woman3,
      name: "ROMAN HEAD",
      description:
        "The central bronze bead found at an antique dealer in Mali resembles a Roman head. The black lava beads from the Canary Islands enhance multicolored glass beads from Venice, called 'King beads' because they were very popular with royalty. They were made in the first half of the 19th century and were used for trade with Africa. Small Mediterranean corals add a touch of contrast. ⁣ © Fodé Koné⁣",
    },
    {
      image: woman4,
      name: "AGGRAB",
      description:
        "Beautiful green stones of amazonite, some of them dating from neolithic times. Amazonite is found from Morocco to Saudi Arabia and is very much valued by people of the desert. Silver beads from Mauritania called aggrab el fadda which roughly translates as “bag made out of a goat”. These bags are still used in areas of North Africa to store and transport water. The beads are created by hammering thin silver sheets. Mauritanian woman usually adorn their hair with those beads. © Fodé Koné⁣⁣",
    },
    {
      image: woman5,
      name: "ROMAN HEAD",
      description:
        "The central bronze bead found at an antique dealer in Mali resembles a Roman head. The black lava beads from the Canary Islands enhance multicolored glass beads from Venice, called 'King beads' because they were very popular with royalty. They were made in the first half of the 19th century and were used for trade with Africa. Small Mediterranean corals add a touch of contrast. ⁣ © Fodé Koné⁣",
    },
    {
      image: woman6,
      name: "AGGRAB",
      description:
        "Beautiful green stones of amazonite, some of them dating from neolithic times. Amazonite is found from Morocco to Saudi Arabia and is very much valued by people of the desert. Silver beads from Mauritania called aggrab el fadda which roughly translates as “bag made out of a goat”. These bags are still used in areas of North Africa to store and transport water. The beads are created by hammering thin silver sheets. Mauritanian woman usually adorn their hair with those beads. © Fodé Koné⁣⁣",
    },
    {
      image: woman7,
      name: "ROMAN HEAD",
      description:
        "The central bronze bead found at an antique dealer in Mali resembles a Roman head. The black lava beads from the Canary Islands enhance multicolored glass beads from Venice, called 'King beads' because they were very popular with royalty. They were made in the first half of the 19th century and were used for trade with Africa. Small Mediterranean corals add a touch of contrast. ⁣ © Fodé Koné⁣",
    },
    {
      image: woman8,
      name: "AGGRAB",
      description:
        "Beautiful green stones of amazonite, some of them dating from neolithic times. Amazonite is found from Morocco to Saudi Arabia and is very much valued by people of the desert. Silver beads from Mauritania called aggrab el fadda which roughly translates as “bag made out of a goat”. These bags are still used in areas of North Africa to store and transport water. The beads are created by hammering thin silver sheets. Mauritanian woman usually adorn their hair with those beads. © Fodé Koné⁣⁣",
    },
    {
      image: woman9,
      name: "ROMAN HEAD",
      description:
        "The central bronze bead found at an antique dealer in Mali resembles a Roman head. The black lava beads from the Canary Islands enhance multicolored glass beads from Venice, called 'King beads' because they were very popular with royalty. They were made in the first half of the 19th century and were used for trade with Africa. Small Mediterranean corals add a touch of contrast. ⁣ © Fodé Koné⁣",
    },
    {
      image: woman10,
      name: "AGGRAB",
      description:
        "Beautiful green stones of amazonite, some of them dating from neolithic times. Amazonite is found from Morocco to Saudi Arabia and is very much valued by people of the desert. Silver beads from Mauritania called aggrab el fadda which roughly translates as “bag made out of a goat”. These bags are still used in areas of North Africa to store and transport water. The beads are created by hammering thin silver sheets. Mauritanian woman usually adorn their hair with those beads. © Fodé Koné⁣⁣",
    },
    {
      image: woman11,
      name: "ROMAN HEAD",
      description:
        "The central bronze bead found at an antique dealer in Mali resembles a Roman head. The black lava beads from the Canary Islands enhance multicolored glass beads from Venice, called 'King beads' because they were very popular with royalty. They were made in the first half of the 19th century and were used for trade with Africa. Small Mediterranean corals add a touch of contrast. ⁣ © Fodé Koné⁣",
    },
    {
      image: woman12,
      name: "AGGRAB",
      description:
        "Beautiful green stones of amazonite, some of them dating from neolithic times. Amazonite is found from Morocco to Saudi Arabia and is very much valued by people of the desert. Silver beads from Mauritania called aggrab el fadda which roughly translates as “bag made out of a goat”. These bags are still used in areas of North Africa to store and transport water. The beads are created by hammering thin silver sheets. Mauritanian woman usually adorn their hair with those beads. © Fodé Koné⁣⁣",
    },
    {
      image: woman13,
      name: "ROMAN HEAD",
      description:
        "The central bronze bead found at an antique dealer in Mali resembles a Roman head. The black lava beads from the Canary Islands enhance multicolored glass beads from Venice, called 'King beads' because they were very popular with royalty. They were made in the first half of the 19th century and were used for trade with Africa. Small Mediterranean corals add a touch of contrast. ⁣ © Fodé Koné⁣",
    },
    {
      image: woman14,
      name: "AGGRAB",
      description:
        "Beautiful green stones of amazonite, some of them dating from neolithic times. Amazonite is found from Morocco to Saudi Arabia and is very much valued by people of the desert. Silver beads from Mauritania called aggrab el fadda which roughly translates as “bag made out of a goat”. These bags are still used in areas of North Africa to store and transport water. The beads are created by hammering thin silver sheets. Mauritanian woman usually adorn their hair with those beads. © Fodé Koné⁣⁣",
    },
    {
      image: woman15,
      name: "ROMAN HEAD",
      description:
        "The central bronze bead found at an antique dealer in Mali resembles a Roman head. The black lava beads from the Canary Islands enhance multicolored glass beads from Venice, called 'King beads' because they were very popular with royalty. They were made in the first half of the 19th century and were used for trade with Africa. Small Mediterranean corals add a touch of contrast. ⁣ © Fodé Koné⁣",
    },

  ];

  return (
    <>
      {!showDetails && (
        <div className={styles.main}>
          <div className={styles.box}>
            {neckLaceList.map((neckLace, index) => (
              <button
                onClick={() => toggleViewDetails(index)}
                className={styles.image}
                key={index}
              >
                <div className={styles.text}>{neckLace.name}</div>
                <Image src={neckLace.image} alt="NecklaceImage" />
              </button>
            ))}
          </div>
        </div>
      )}

      {showDetails && (
        <Detail
          data={currentNecklace}
          increaseIndex={increaseIndex}
          decreaseIndex={decreaseIndex}
          index={index}
          listLength={neckLaceList.length}
        />
      )}
    </>
  );
}

export default Woman;