// Timeline Data
const timelineData = [
    {
    year: 1857,
    title: "First War of Independence",
    description: "The Revolt of 1857, often called India’s First War of Independence, was the first large-scale uprising against British rule. It is also referred to as the Sepoy Mutiny or the Great Revolt. The immediate spark came with the introduction of the new Enfield rifles, whose cartridges were rumored to be greased with cow and pig fat, offending both Hindu and Muslim soldiers. This incident, however, was only the trigger; discontent had been building for years due to economic exploitation, high taxation, the destruction of traditional industries, and the British policy of annexation under the Doctrine of Lapse. The revolt began on May 10, 1857, in Meerut, when Indian sepoys rose against their British officers, killed them, and marched to Delhi. There, they declared the ageing Mughal Emperor Bahadur Shah II as the symbolic ruler of a united India. The rebellion spread rapidly to major centers like Kanpur, Lucknow, Jhansi, and Gwalior. Leaders such as Mangal Pandey, Rani Lakshmibai of Jhansi, Tantia Tope, and Nana Sahib emerged as heroic figures, inspiring soldiers and civilians alike. Ordinary peasants, artisans, and local rulers joined the struggle, driven by resentment over British dominance in politics and trade. The British responded with overwhelming force, bringing in reinforcements from Britain and other colonies. Fierce battles were fought, with the rebels displaying extraordinary courage but lacking coordination, modern weaponry, and unified leadership. By mid-1858, the uprising had been brutally suppressed, many leaders killed or executed, and villages destroyed. In its aftermath, the British East India Company was dissolved, and India came under direct control of the British Crown, marking the beginning of the British Raj. The Mughal dynasty came to an end as Bahadur Shah II was exiled to Rangoon. Though the revolt failed to achieve its immediate aim of ending British rule, it planted the seeds of nationalism, fostered unity between Hindus and Muslims, and inspired future generations of freedom fighters. Today, it is remembered not only as a rebellion but as the spark that ignited India’s long and determined struggle for independence.",
    leaders: ["Mangal Pandey", "Rani Lakshmibai", "Tantia Tope"],
    image: "assets/images/freedom-fighters/1857.jpg"
    },
    {
    year: 1885,
    title: "Formation of the Indian National Congress",
    description: "The year 1885 marked a turning point in India’s political awakening with the formation of the Indian National Congress (INC), an organization that would eventually lead the struggle for independence. Initiated by Allan Octavian Hume, a retired British civil servant, and supported by prominent Indian leaders such as Dadabhai Naoroji and Dinshaw Wacha, the Congress was conceived as a platform for dialogue between educated Indians and the British colonial administration. Its first session, held in Bombay from December 28 to 31, was attended by 72 delegates from across the country, representing a diverse range of regions and communities. In its early years, the Congress adopted a moderate approach, focusing on constitutional reforms, protection of civil rights, and greater representation of Indians in legislative councils. Leaders presented petitions and resolutions, believing that reasoned debate and appeals to British liberal traditions could bring gradual change. Although the organization was not initially aimed at achieving complete independence, it fostered a sense of unity among educated Indians and provided a national stage for political discussion. Over time, younger leaders like Bal Gangadhar Tilak, Bipin Chandra Pal, and Lala Lajpat Rai pushed for a more assertive and self-reliant stance, planting the seeds for the mass movements that would follow. The formation of the Congress thus stands as a foundational moment in India’s modern political history, uniting voices from across the subcontinent and setting in motion a process that would ultimately lead to the nation’s freedom.",
    leaders: ["Allan Octavian Hume", "Dadabhai Naoroji", "Dinshaw Wacha"],
    image: "assets/images/freedom-fighters/1885.jpg"
    },
    {
    year: 1905,
    title: "Swadeshi Movement",
    description: "Launched in response to the 1905 Partition of Bengal, the Swadeshi Movement urged Indians to embrace self-reliance by boycotting British goods and promoting indigenous products. It spurred the revival of local industries, crafts, and schools, while fostering a strong sense of economic nationalism. The movement also strengthened the cultural identity of the nation and inspired future mass movements for freedom.",
    leaders: ["Bal Gangadhar Tilak", "Bipin Chandra Pal", "Lala Lajpat Rai"],
    image: "assets/images/freedom-fighters/1905.jpg"
},
{
    year: 1911,
    title: "Capital Shift to Delhi",
    description: "In 1911, during the Delhi Durbar attended by King George V and Queen Mary, the British government announced the relocation of India’s capital from Calcutta to Delhi. The decision was aimed at placing the seat of power in a more centrally located and historically significant region. This shift symbolized the imperial authority’s desire to connect with India’s ancient political heritage, while also serving strategic administrative purposes.",
    leaders: ["King George V", "Queen Mary", "Lord Hardinge"],
    image: "assets/images/freedom-fighters/1911.jpg"
},
{
    year: 1914,
    title: "First World War Begins",
    description: "In 1914, the outbreak of the First World War drew India, as part of the British Empire, into a global conflict. Over a million Indian soldiers served in various theatres of the war, from Europe to Africa and the Middle East, showcasing immense courage and sacrifice. While the war intensified India's economic and political challenges, it also heightened nationalist aspirations, as promises of self-governance after the war fueled demands for independence.",
    leaders: ["Mahatma Gandhi", "Bal Gangadhar Tilak", "Annie Besant"],
    image: "assets/images/freedom-fighters/1914.jpg"
},
{
    year: 1920,
    title: "Non-Cooperation Movement",
    description: "Led by Mahatma Gandhi, the Non-Cooperation Movement of 1920–1922 marked a nationwide call for Indians to withdraw from British institutions, titles, schools, and courts. Rooted in the principles of non-violence and truth, it aimed to cripple the British administration through peaceful non-cooperation. Though suspended after the Chauri Chaura incident, it mobilized millions and established Gandhi as the leader of India's freedom struggle.",
    leaders: ["Mahatma Gandhi", "C. Rajagopalachari", "Maulana Abul Kalam Azad"],
    image: "assets/images/freedom-fighters/1920.jpg"
},
{
    year: 1923,
    title: "Formation of the Swaraj Party",
    description: "In 1923, prominent leaders Motilal Nehru and Chittaranjan Das founded the Swaraj Party within the Indian National Congress. Frustrated by the suspension of the Non-Cooperation Movement, they aimed to enter legislative councils to obstruct and reform British policies from within. The party became a powerful voice for self-rule, combining parliamentary tactics with continued grassroots mobilization.",
    leaders: ["Motilal Nehru", "Chittaranjan Das", "Vithalbhai Patel"],
    image: "assets/images/freedom-fighters/1923.jpg"
},
{
    year: 1928,
    title: "Nehru Report – Proposal for a New Indian Constitution",
    description: "In 1928, an all-parties committee headed by Motilal Nehru drafted the Nehru Report, proposing a new constitutional framework for India. It called for Dominion status within the British Commonwealth, fundamental rights for citizens, and responsible government at both provincial and central levels. While it was a significant step toward defining India’s political future, disagreements over its provisions deepened divisions between the Congress and the Muslim League.",
    leaders: ["Motilal Nehru", "Jawaharlal Nehru", "Subhas Chandra Bose"],
    image: "assets/images/freedom-fighters/1928.jpg"
},
{
    year: 1930,
    title: "Civil Disobedience Movement",
    description: "Initiated by Mahatma Gandhi with the historic Salt March to Dandi in 1930, the Civil Disobedience Movement urged Indians to openly defy unjust British laws. Acts of peaceful protest included making salt illegally, refusing to pay taxes, and boycotting British goods. This mass mobilization spread across the country, drawing global attention to India's demand for self-rule.",
    leaders: ["Mahatma Gandhi", "Sarojini Naidu", "Jawaharlal Nehru"],
    image: "assets/images/freedom-fighters/1930.jpg"
},
{
    year: 1935,
    title: "Government of India Act Passed",
    description: "The Government of India Act of 1935 was the longest and most detailed piece of legislation enacted by the British Parliament for colonial India. It introduced provincial autonomy, expanded the franchise to millions of new voters, and proposed a federal structure for the country. While criticized for retaining significant powers in British hands, it laid the constitutional groundwork that influenced India’s governance until independence.",
    leaders: ["Lord Linlithgow", "B. R. Ambedkar", "Jawaharlal Nehru"],
    image: "assets/images/freedom-fighters/1935.jpg"
},
{
    year: 1942,
    title: "Quit India Movement",
    description: "In August 1942, amid the turbulence of World War II, the Quit India Movement was launched by the Indian National Congress under Gandhi’s leadership. Declaring 'Do or Die,' it called for the immediate withdrawal of British rule from India. Despite mass arrests and brutal suppression, it unified Indians from all walks of life in a final push for independence.",
    leaders: ["Mahatma Gandhi", "Aruna Asaf Ali", "Jayaprakash Narayan"],
    image: "assets/images/freedom-fighters/1942.jpg"
},
{
    year: 1947,
    title: "Indian Independence",
    description: "On August 15, 1947, after decades of struggle, sacrifice, and unity, India achieved independence from British rule. The moment marked the triumph of countless movements, from the Revolt of 1857 to the Quit India Movement, and was shaped by leaders, activists, and ordinary citizens alike. Though independence came with the partition of India and Pakistan, it signaled the birth of the world’s largest democracy.",
    leaders: ["Mahatma Gandhi", "Jawaharlal Nehru", "Sardar Vallabhbhai Patel"],
    image: "assets/images/freedom-fighters/1947.jpg"
}

];

// Map Location Data
const locationData = {
    delhi: {
        title: "Delhi - Heart of the Freedom Struggle",
        content: `
            <p><strong>Key Events:</strong></p>
            <ul>
                <li>Quit India Movement (1942)</li>
                <li>INA Trials at Red Fort (1945)</li>
                <li>First Independence Day Celebration (1947)</li>
            </ul>
            <img src="assets/images/locations/delhi.jpg" width="100%">
        `
    },
    

    // Add more location data...
    tamilnadu: {
        title: "Tamil Nadu – Role in the Freedom Struggle",
        content: `
            <p><strong>Key Events:</strong></p>
            <ul>
                <li>Vedaranyam Salt Satyagraha led by C. Rajagopalachari (1930)</li>
                <li>Home Rule Movement activities in Madras Presidency (1916)</li>
                <li>Anti-Hindi Agitations in the late 1930s</li>
            </ul>
            <img src="assets/images/locations/tamilnadu.jpg" width="100%">
        `
    },

    kerala: {
        title: "Kerala – Role in the Freedom Struggle",
        content: `
            <p><strong>Key Events:</strong></p>
            <ul>
                <li>Vaikom Satyagraha (1924–1925) – Protest against untouchability and for temple entry rights.</li>
                <li>Salt Satyagraha in Payyannur led by K. Kelappan (1930)</li>
                <li>Punnapra-Vayalar Uprising against princely state policies (1946)</li>
            </ul>
            <img src="assets/images/locations/kerala.jpg" width="100%">
        `
    },

    karnataka: {
        title: "Karnataka – Role in the Freedom Struggle",
        content: `
            <p><strong>Key Events:</strong></p>
            <ul>
                <li>Kappalottiya Tamilan V.O. Chidambaram Pillai's shipping activities inspired protests in Mangaluru port (early 1900s)</li>
                <li>Salt Satyagraha at Ankola and Mangaluru (1930)</li>
                <li>Quit India Movement activities in Hubli, Dharwad, and other districts (1942)</li>
            </ul>
            <img src="assets/images/locations/karnataka.jpg" width="100%">
        `
    },
    goa: {
        title: "Goa – Role in the Freedom Struggle",
        content: `
             <p><strong>Key Events:</strong></p>
            <ul>
                <li>Anti-colonial movements against Portuguese rule during the 20th century.</li>
                <li>1946 Satyagraha led by Dr. Ram Manohar Lohia demanding civil liberties.</li>
                <li>Liberation of Goa on 19 December 1961 through Operation Vijay.</li>
            </ul>
                <img src="assets/images/locations/goa.jpg" width="100%">
        `
    },

    andhrapradesh: {
        title: "Andhra Pradesh – Role in the Freedom Struggle",
        content: `
            <p><strong>Key Events:</strong></p>
            <ul>
                <li>Vijayawada Congress Session (1921) – Strengthened Non-Cooperation Movement in the region.</li>
                <li>Salt Satyagraha in Chirala, Palasa, and Visakhapatnam (1930).</li>
                <li>Quit India Movement uprisings in various districts (1942).</li>
            </ul>
            <img src="assets/images/locations/andhrapradesh.jpg" width="100%">
        `
    },


    maharashtra: {
        title: "Maharashtra – Role in the Freedom Struggle",
        content: `
            <p><strong>Key Events:</strong></p>
            <ul>
                <li>Indian Home Rule League founded by Bal Gangadhar Tilak in Pune (1916).</li>
                <li>Salt Satyagraha at Vile Parle and other coastal areas (1930).</li>
                <li>Quit India Movement protests in Mumbai and Pune (1942).</li>
            </ul>
            <img src="assets/images/locations/maharashtra.jpg" width="100%">
        `
    },

    telangana: {
        title: "Telangana – Role in the Freedom Struggle",
        content: `
            <p><strong>Key Events:</strong></p>
            <ul>
                <li>Telangana Rebellion (1946–1951) against feudal landlords and the Nizam's rule.</li>
                <li>Integration into the Indian Union after Hyderabad Liberation (1948).</li>
                <li>Participation in Quit India Movement activities in Hyderabad State (1942).</li>
            </ul>
            <img src="assets/images/locations/telangana.jpg" width="100%">
        `
    },

    odisha: {
        title: "Odisha – Role in the Freedom Struggle",
        content: `
            <p><strong>Key Events:</strong></p>
            <ul>
                <li>Non-Cooperation Movement activities in Cuttack and Puri (1921).</li>
                <li>Salt Satyagraha at Inchudi led by Gopabandhu Choudhury (1930).</li>
                <li>Participation in the Quit India Movement with uprisings in several districts (1942).</li>
            </ul>
            <img src="assets/images/locations/odisha.jpg" width="100%">
        `
    },

    madhyapradesh: {
        title: "Madhya Pradesh – Role in the Freedom Struggle",
        content: `
            <p><strong>Key Events:</strong></p>
            <ul>
                <li>Bhopal and Jabalpur were active centers during the Non-Cooperation Movement (1920–1922).</li>
                <li>Participation in the Civil Disobedience Movement across several districts (1930).</li>
                <li>Quit India Movement uprisings in Indore, Gwalior, and other cities (1942).</li>
            </ul>
            <img src="assets/images/locations/madhyapradesh.jpg" width="100%">
        `
    },

    gujarat: {
        title: "Gujarat – Role in the Freedom Struggle",
        content: `
            <p><strong>Key Events:</strong></p>
            <ul>
                <li>Dandi March led by Mahatma Gandhi from Sabarmati Ashram to Dandi (1930).</li>
                <li>Founding of Sabarmati Ashram, a hub for nationalist activities (1917).</li>
                <li>Active participation in the Quit India Movement across several districts (1942).</li>
            </ul>
            <img src="assets/images/locations/gujarat.jpg" width="100%">
        `
    },

    jharkhand: {
        title: "Jharkhand – Role in the Freedom Struggle",
        content: `
            <p><strong>Key Events:</strong></p>
            <ul>
                <li>Birsa Munda’s Ulgulan (1899–1900) – Revolt against British colonial policies and exploitation of tribals.</li>
                <li>Tana Bhagat Movement (1914–1920) – A tribal non-violent resistance inspired by Gandhian principles.</li>
                <li>Participation in the Quit India Movement across tribal regions (1942).</li>
            </ul>
            <img src="assets/images/locations/jharkhand.jpg" width="100%">
        `
    },

    westbengal: {
        title: "West Bengal – Role in the Freedom Struggle",
        content: `
            <p><strong>Key Events:</strong></p>
            <ul>
                <li>Partition of Bengal (1905) sparked the Swadeshi Movement.</li>
                <li>Revolutionary activities by groups like Anushilan Samiti and Jugantar.</li>
                <li>Quit India Movement protests in Kolkata and other districts (1942).</li>
            </ul>
            <img src="assets/images/locations/westbengal.jpg" width="100%">
        `
    },

    rajasthan: {
        title: "Rajasthan – Role in the Freedom Struggle",
        content: `
            <p><strong>Key Events:</strong></p>
            <ul>
                <li>Bijolia Peasant Movement in Mewar region led by Vijay Singh Pathik (1916).</li>
                <li>Praja Mandal movements in princely states demanding democratic reforms.</li>
                <li>Participation in the Quit India Movement across Jaipur, Jodhpur, and other regions (1942).</li>
            </ul>
            <img src="assets/images/locations/rajasthan.jpg" width="100%">
        `
    },

    haryana: {
        title: "Haryana – Role in the Freedom Struggle",
        content: `
            <p><strong>Key Events:</strong></p>
            <ul>
                <li>Active participation in the 1857 First War of Independence in areas like Rohtak, Hisar, and Ambala.</li>
                <li>Revolutionary activities and protests during the Non-Cooperation Movement (1920–1922).</li>
                <li>Quit India Movement demonstrations in several districts (1942).</li>
            </ul>
            <img src="assets/images/locations/haryana.jpg" width="100%">
        `
    },

    uttarpradesh: {
        title: "Uttar Pradesh – Role in the Freedom Struggle",
        content: `
            <p><strong>Key Events:</strong></p>
            <ul>
                <li>Major center of the 1857 First War of Independence in Meerut, Kanpur, and Jhansi.</li>
                <li>Kakori Conspiracy (1925) led by Ram Prasad Bismil and Ashfaqulla Khan.</li>
                <li>Active participation in the Quit India Movement (1942).</li>
            </ul>
            <img src="assets/images/locations/uttarpradesh.jpg" width="100%">
        `
    },

    bihar: {
        title: "Bihar – Role in the Freedom Struggle",
        content: `
            <p><strong>Key Events:</strong></p>
            <ul>
                <li>Champaran Satyagraha led by Mahatma Gandhi against indigo planters (1917).</li>
                <li>Active role in the Non-Cooperation and Civil Disobedience Movements.</li>
                <li>Quit India Movement protests in Patna, Bhagalpur, and other districts (1942).</li>
            </ul>
            <img src="assets/images/locations/bihar.jpg" width="100%">
        `
    },

    sikkim: {
        title: "Sikkim – Role in the Freedom Struggle",
        content: `
            <p><strong>Key Events:</strong></p>
            <ul>
                <li>Sikkim was a princely state during the British era and not directly part of the mainstream freedom struggle.</li>
                <li>Maintained close ties with India’s independence leaders through political interactions.</li>
                <li>Later merged with India in 1975 after a referendum, ending monarchy rule.</li>
            </ul>
            <img src="assets/images/locations/sikkim.jpg" width="100%">
        `
    },

    arunachalpradesh: {
        title: "Arunachal Pradesh – Role in the Freedom Struggle",
        content: `
            <p><strong>Key Events:</strong></p>
            <ul>
                <li>Region was part of the North-East Frontier Agency (NEFA) during British rule.</li>
                <li>Not a major center of mainstream freedom struggle due to geographic isolation, but locals supported the national movement indirectly.</li>
                <li>Integrated into India after independence, with key role during 1962 Indo-China conflict.</li>
            </ul>
            <img src="assets/images/locations/arunachalpradesh.jpg" width="100%">
        `
    },

    

    uttarakhand: {
        title: "Uttarakhand – Role in the Freedom Struggle",
        content: `
            <p><strong>Key Events:</strong></p>
            <ul>
                <li>Active participation in the Quit India Movement (1942) in regions like Almora and Pithoragarh.</li>
                <li>Freedom fighters such as Govind Ballabh Pant played a major role in India’s independence.</li>
                <li>Contributions of Kumaon and Garhwal regiments in World War II, indirectly aiding the nationalist cause.</li>
            </ul>
            <img src="assets/images/locations/uttarakhand.jpg" width="100%">
        `
    },

    punjab: {
        title: "Punjab – Role in the Freedom Struggle",
        content: `
            <p><strong>Key Events:</strong></p>
            <ul>
                <li>Jallianwala Bagh Massacre in Amritsar (1919) became a turning point in the freedom struggle.</li>
                <li>Ghadar Movement aimed at overthrowing British rule (early 20th century).</li>
                <li>Prominent revolutionaries like Bhagat Singh, Udham Singh, and Lala Lajpat Rai hailed from Punjab.</li>
            </ul>
            <img src="assets/images/locations/punjab.jpg" width="100%">
        `
    },

    himachalpradesh: {
        title: "Himachal Pradesh – Role in the Freedom Struggle",
        content: `
            <p><strong>Key Events:</strong></p>
            <ul>
                <li>Praja Mandal movements in princely states like Mandi, Suket, and Bushahr demanding democratic reforms.</li>
                <li>Support for the Quit India Movement (1942) in various hill regions.</li>
                <li>Contribution of soldiers from hill states in World War II, indirectly aiding nationalist efforts.</li>
            </ul>
            <img src="assets/images/locations/himachalpradesh.jpg" width="100%">
        `
    },

    jammukashmir: {
        title: "Jammu & Kashmir – Role in the Freedom Struggle",
        content: `
            <p><strong>Key Events:</strong></p>
            <ul>
                <li>Political awakening during the 1930s with movements against the princely state's autocratic rule.</li>
                <li>Formation of the All Jammu and Kashmir Muslim Conference in 1932, later renamed the National Conference under Sheikh Abdullah.</li>
                <li>Accession to India in 1947 after tribal invasion, followed by signing of the Instrument of Accession.</li>
            </ul>
            <img src="assets/images/locations/jammukashmir.jpg" width="100%">
        `
    },

    assam: {
        title: "Assam – Role in the Freedom Struggle",
        content: `
            <p><strong>Key Events:</strong></p>
            <ul>
                <li>Participation in the Non-Cooperation Movement under leaders like Tarun Ram Phukan and Nabin Chandra Bardoloi (1920–1922).</li>
                <li>Quit India Movement protests led by Gopinath Bordoloi and others (1942).</li>
                <li>Active role in opposing British policies affecting tea plantation workers and peasants.</li>
            </ul>
            <img src="assets/images/locations/assam.jpg" width="100%">
        `
    },

    nagaland: {
        title: "Nagaland – Role in the Freedom Struggle",
        content: `
            <p><strong>Key Events:</strong></p>
            <ul>
                <li>During British rule, Nagaland was part of the Naga Hills district under Assam.</li>
                <li>Limited direct involvement in the mainstream Indian freedom struggle due to its remote location and distinct political movements.</li>
                <li>Political awakening grew in the 1940s, leading to the formation of the Naga National Council (NNC) in 1946.</li>
            </ul>
            <img src="assets/images/locations/nagaland.jpg" width="100%">
        `
    },

    meghalaya: {
        title: "Meghalaya – Role in the Freedom Struggle",
        content: `
            <p><strong>Key Events:</strong></p>
            <ul>
                <li>Part of Assam during the British period; tribal leaders resisted colonial expansion and exploitation.</li>
                <li>Tirot Sing’s resistance (1829–1833) against British rule inspired later political movements.</li>
                <li>Supported India’s independence indirectly through political mobilization in the hill regions.</li>
            </ul>
            <img src="assets/images/locations/meghalaya.jpg" width="100%">
        `
    },

    manipur: {
        title: "Manipur – Role in the Freedom Struggle",
        content: `
            <p><strong>Key Events:</strong></p>
            <ul>
                <li>Occupied by the Japanese and Indian National Army (INA) during World War II (1944).</li>
                <li>Battle of Imphal (1944) – A decisive campaign involving the INA and Allied forces.</li>
                <li>Local support for Subhas Chandra Bose’s INA activities in the region.</li>
            </ul>
            <img src="assets/images/locations/manipur.jpg" width="100%">
        `
    },

    mizoram: {
        title: "Mizoram – Role in the Freedom Struggle",
        content: `
            <p><strong>Key Events:</strong></p>
            <ul>
                <li>Part of the Lushai Hills district under Assam during British rule.</li>
                <li>Indirect involvement in the Indian freedom struggle due to geographical isolation.</li>
                <li>Formation of political consciousness in the 1940s, eventually contributing to integration with India in 1947.</li>
            </ul>
            <img src="assets/images/locations/mizoram.jpg" width="100%">
        `
    },

    tripura: {
        title: "Tripura – Role in the Freedom Struggle",
        content: `
            <p><strong>Key Events:</strong></p>
            <ul>
                <li>Princely state under British suzerainty during the colonial period.</li>
                <li>Provided shelter and support to revolutionaries from Bengal, including participants of the Swadeshi Movement.</li>
                <li>Acceded to the Indian Union in 1949 after independence.</li>
            </ul>
            <img src="assets/images/locations/tripura.jpg" width="100%">
        `
    }


};

// Freedom Fighters Data
const fightersData = [
    {
        name: "Mahatma Gandhi",
        role: "Father of the Nation",
        description: "Led the non-violent civil disobedience movement.",
        image: "assets/images/freedom-fighters/gandhi.jpg",
        quotes: ["Be the change you wish to see in the world."]
    },
    {
        name: "Bhagat Singh",
        role: "Revolutionary",
        description: "Famous for his role in the Lahore Conspiracy Case.",
        image: "assets/images/freedom-fighters/bhagat-singh.jpg",
        quotes: ["Inquilab Zindabad!"]
    },
    // Add more fighters...

    {
        name: "Jawaharlal Nehru",
        role: "First Prime Minister of India",
        description: "A central figure in Indian politics before and after independence, known for his vision of a modern, secular, and industrial nation.",
        image: "assets/images/freedom-fighters/nehru.jpg",
        quotes: ["Time is not measured by the passing of years but by what one does, what one feels, and what one achieves."]
    },
    {
        name: "Lal Bahadur Shastri",
        role: "2nd Prime Minister of India",
        description: "Known for his simplicity, integrity, and leadership during the Indo-Pak war of 1965. Popularized the slogan 'Jai Jawan Jai Kisan'.",
        image: "assets/images/freedom-fighters/shastri.jpg",
        quotes: ["Jai Jawan Jai Kisan"]
    },
    {
        name: "Sardar Vallabhbhai Patel",
        role: "Iron Man of India",
        description: "Played a crucial role in the integration of princely states into the Indian Union and was the first Deputy Prime Minister and Home Minister of India.",
        image: "assets/images/freedom-fighters/patel.jpg",
        quotes: ["Manpower without unity is not a strength unless it is harmonized and united properly, then it becomes a spiritual power."]
    },
    {
        name: "Lala Lajpat Rai",
        role: "Punjab Kesari",
        description: "A prominent nationalist leader, freedom fighter, and member of the Lal-Bal-Pal trio, known for his fierce opposition to British rule.",
        image: "assets/images/freedom-fighters/lala_lajpat_rai.jpg",
        quotes: ["The Government which attacks its own innocent citizens is not worthy of being called a civilised government."]
    },
    {
        name: "Mangal Pandey",
        role: "Indian Soldier & Freedom Fighter",
        description: "A key figure in the Indian Rebellion of 1857, whose actions sparked the first war of independence against British rule.",
        image: "assets/images/freedom-fighters/mangal_pandey.jpg",
        quotes: ["The enemy’s tyranny can be ended only when we rise against it together."]
    },
    {
        name: "Rani Lakshmi Bai",
        role: "Queen of Jhansi",
        description: "One of the leading figures of the Indian Rebellion of 1857, remembered for her bravery, leadership, and fierce resistance against British rule.",
        image: "assets/images/freedom-fighters/rani_lakshmi_bai.jpg",
        quotes: ["I shall not surrender my Jhansi."]
    },
    {
        name: "Subhas Chandra Bose",
        role: "Leader of the Indian National Army",
        description: "A prominent nationalist leader who founded the Indian National Army (INA) and fought for India's freedom with the slogan 'Give me blood, and I shall give you freedom'.",
        image: "assets/images/freedom-fighters/subhas_chandra_bose.jpg",
        quotes: ["Give me blood, and I shall give you freedom."]
    },
    {
        name: "Sukhdev Thapar",
        role: "Indian Revolutionary",
        description: "A prominent freedom fighter and member of the Hindustan Socialist Republican Association (HSRA), known for his sacrifice alongside Bhagat Singh and Rajguru.",
        image: "assets/images/freedom-fighters/sukhdev_thapar.jpg",
        quotes: ["Let us dedicate our lives to the cause of our motherland’s freedom."]
    },
    {
        name: "Bal Gangadhar Tilak",
        role: "Father of Indian Unrest",
        description: "A freedom fighter, teacher, and social reformer, he was one of the first leaders to demand complete independence from British rule.",
        image: "assets/images/freedom-fighters/bal_gangadhar_tilak.jpg",
        quotes: ["Swaraj is my birthright, and I shall have it."]
    },
    {
        name: "Bipin Chandra Pal",
        role: "Indian Nationalist Leader",
        description: "A prominent freedom fighter, social reformer, and member of the Lal-Bal-Pal trio, he was a strong advocate of the Swadeshi movement and national education.",
        image: "assets/images/freedom-fighters/bipin_chandra_pal.jpg",
        quotes: ["Swaraj is the fulfillment of the historic destiny of the Indian people."]
    },
    {
        name: "Chittaranjan Das",
        role: "Deshbandhu",
        description: "A freedom fighter, lawyer, and political leader who defended revolutionaries in court and was a prominent leader of the Indian National Congress.",
        image: "assets/images/freedom-fighters/chittaranjan_das.jpg",
        quotes: ["The sacrifice of today will bring the freedom of tomorrow."]
    },
    {
        name: "Dadabhai Naoroji",
        role: "Grand Old Man of India",
        description: "An Indian political leader, educator, and economist, known for his Drain Theory and for being the first Indian to serve as a Member of Parliament in Britain.",
        image: "assets/images/freedom-fighters/dadabhai_naoroji.jpg",
        quotes: ["Self-government is the only remedy for India’s political and economic ills."]
    },
    {
        name: "Gopal Krishna Gokhale",
        role: "Social Reformer & Political Leader",
        description: "A senior leader of the Indian National Congress and mentor to Mahatma Gandhi, he advocated for social reform, education, and constitutional methods for attaining self-rule.",
        image: "assets/images/freedom-fighters/gopal_krishna_gokhale.jpg",
        quotes: ["The true test of a nation’s progress lies in the education and upliftment of its weaker sections."]
    },
    {
        name: "Vinayak Damodar Savarkar",
        role: "Freedom Fighter & Revolutionary",
        description: "An Indian independence activist, poet, and writer, known for his fierce nationalism, advocacy of Hindutva, and resistance against British colonial rule.",
        image: "assets/images/freedom-fighters/vinayak_damodar_savarkar.jpg",
        quotes: ["One country, one God, one caste, one mind, brothers all of us without difference, without doubt."]
    },
    {
        name: "Shivaram Rajguru",
        role: "Indian Revolutionary",
        description: "A fearless freedom fighter and member of the Hindustan Socialist Republican Association, he was executed alongside Bhagat Singh and Sukhdev for the assassination of a British officer.",
        image: "assets/images/freedom-fighters/shivaram_rajguru.jpg",
        quotes: ["The cry for freedom is worth every sacrifice."]
    },
    {
        name: "Ashfaqulla Khan",
        role: "Indian Revolutionary",
        description: "A brave freedom fighter and member of the Hindustan Republican Association, he actively participated in the Kakori Train Robbery to fund the independence movement.",
        image: "assets/images/freedom-fighters/ashfaqulla_khan.jpg",
        quotes: ["Our blood will water the tree of freedom."]
    },
    {
        name: "Ram Prasad Bismil",
        role: "Indian Revolutionary & Poet",
        description: "A prominent freedom fighter and poet, he was a key member of the Hindustan Republican Association and a leader of the Kakori Conspiracy of 1925.",
        image: "assets/images/freedom-fighters/ram_prasad_bismil.jpg",
        quotes: ["I will sacrifice my life, but I will never bow before the British."]
    },
    {
        name: "Chandrashekhar Azad",
        role: "Indian Revolutionary",
        description: "A fearless freedom fighter and a key leader of the Hindustan Socialist Republican Association, he vowed never to be captured alive by the British.",
        image: "assets/images/freedom-fighters/chandrashekhar_azad.jpg",
        quotes: ["I will live free and die free."]
    },
    {
        name: "Kunwar Singh",
        role: "Leader of the 1857 Rebellion",
        description: "A courageous leader from Bihar who played a key role in the Indian Rebellion of 1857, fighting against British forces even at the age of 80.",
        image: "assets/images/freedom-fighters/kunwar_singh.jpg",
        quotes: ["Even in my last breath, I shall fight for my motherland."]
    },
    {
        name: "Begum Hazrat Mahal",
        role: "Rebel Leader of 1857",
        description: "The queen of Awadh who led her army against the British during the Revolt of 1857, known for her courage and strategic leadership.",
        image: "assets/images/freedom-fighters/begum_hazrat_mahal.jpg",
        quotes: ["We shall never submit to foreign rule."]
    },
    {
        name: "Batukeshwar Dutt",
        role: "Indian Revolutionary",
        description: "A freedom fighter and member of the Hindustan Socialist Republican Association, best known for bombing the Central Legislative Assembly in 1929 alongside Bhagat Singh to protest against British rule.",
        image: "assets/images/freedom-fighters/batukeshwar_dutt.jpg",
        quotes: ["We bombed the Assembly to make the deaf hear."]
    },
    {
        name: "Alluri Sitarama Raju",
        role: "Indian Revolutionary Leader",
        description: "A freedom fighter who led the Rampa Rebellion of 1922–1924 against British colonial rule in the Eastern Ghats region, inspiring tribal communities to rise for independence.",
        image: "assets/images/freedom-fighters/alluri_sitarama_raju.jpg",
        quotes: ["Better to die in the battle for freedom than to live in bondage."]
    },
    {
        name: "C. Rajagopalachari",
        role: "Indian Statesman & Freedom Fighter",
        description: "An independence activist, lawyer, and politician, he was the last Governor-General of India and a close associate of Mahatma Gandhi, known for his integrity and vision.",
        image: "assets/images/freedom-fighters/c_rajagopalachari.jpg",
        quotes: ["True freedom comes through self-discipline and moral courage."]
    },
    {
        name: "Aruna Asaf Ali",
        role: "Freedom Fighter & Political Leader",
        description: "A prominent leader of the Quit India Movement, she is remembered for hoisting the Indian National Congress flag at the Gowalia Tank Maidan in 1942, inspiring thousands to join the struggle.",
        image: "assets/images/freedom-fighters/aruna_asaf_ali.jpg",
        quotes: ["The call of freedom must be answered with courage and sacrifice."]
    },
    {
        name: "Matangini Hazra",
        role: "Gandhian Freedom Fighter",
        description: "An elderly freedom fighter from Bengal who participated in the Quit India Movement and was martyred while holding the Indian flag during a protest march.",
        image: "assets/images/freedom-fighters/matangini_hazra.jpg",
        quotes: ["Even if I fall, my flag shall remain flying high."]
    },
    {
        name: "Tantia Tope",
        role: "Leader of the 1857 Rebellion",
        description: "A prominent general in the Indian Rebellion of 1857, known for his brilliant guerrilla tactics and unwavering fight against British forces.",
        image: "assets/images/freedom-fighters/tantia_tope.jpg",
        quotes: ["We shall fight the British till our last breath."]
    },
    {
        name: "Bhikaiji Cama",
        role: "Indian Freedom Fighter & Political Activist",
        description: "An Indian independence activist who unfurled the first version of the Indian national flag on foreign soil at the International Socialist Conference in Stuttgart, Germany, in 1907.",
        image: "assets/images/freedom-fighters/bhikaiji_cama.jpg",
        quotes: ["This flag is a symbol of our unity and our fight for independence."]
    },
    {
        name: "Surya Sen",
        role: "Indian Revolutionary Leader",
        description: "A prominent freedom fighter from Bengal, best known for leading the Chittagong Armoury Raid in 1930 against British colonial forces.",
        image: "assets/images/freedom-fighters/surya_sen.jpg",
        quotes: ["Freedom is won through courage, sacrifice, and unity."]
    },

];

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    // Load timeline
    loadTimeline();
    
    // Load freedom fighters
    loadFighters();
    
    // Set up map area hover effects
    setupMapAreas();
});

// Section Navigation
function showSection(sectionId) {
    document.querySelectorAll('section').forEach(section => {
        section.classList.remove('active-section');
    });
    document.getElementById(sectionId).classList.add('active-section');
}

// Timeline Functions
function loadTimeline() {
    const timeline = document.querySelector('.timeline');
    
    timelineData.forEach(item => {
        const timelineItem = document.createElement('div');
        timelineItem.className = 'timeline-item';
        timelineItem.innerHTML = `
            <div class="timeline-content" onclick="showTimelineDetails(${item.year})">
                <div class="timeline-year">${item.year}</div>
                <h3>${item.title}</h3>
                <p>${item.leaders.join(', ')}</p>
            </div>
        `;
        
        // Alternate left/right positioning
        if (timeline.children.length % 2 === 0) {
            timelineItem.style.left = '0';
            timelineItem.querySelector('.timeline-content').style.textAlign = 'right';
        } else {
            timelineItem.style.left = '50%';
            timelineItem.querySelector('.timeline-content').style.textAlign = 'left';
        }
        
        timeline.appendChild(timelineItem);
    });
}

function showTimelineDetails(year) {
    const item = timelineData.find(item => item.year === year);
    const details = document.getElementById('timeline-details');
    
    details.innerHTML = `
        <h3>${item.title} (${item.year})</h3>
        <img src="${item.image}" width="100%" style="max-height: 200px; object-fit: cover; margin: 1rem 0;">
        <p>${item.description}</p>
        <p><strong>Key Leaders:</strong> ${item.leaders.join(', ')}</p>
    `;
}

// Map Functions
function setupMapAreas() {
    document.querySelectorAll('area').forEach(area => {
        area.addEventListener('mouseover', function() {
            this.style.cursor = 'pointer';
            this.title = 'Click for details';
        });
        
        area.addEventListener('click', function() {
            const location = this.getAttribute('data-info');
            showLocationInfo(location);
        });
    });
}

function showLocationInfo(location) {
    const info = locationData[location];
    const infoBox = document.getElementById('location-info');
    
    document.getElementById('location-title').textContent = info.title;
    document.getElementById('location-content').innerHTML = info.content;
    
    infoBox.style.display = 'block';
}

function hideLocationInfo() {
    document.getElementById('location-info').style.display = 'none';
}

// Freedom Fighters Functions
function loadFighters() {
    const gallery = document.getElementById('fighters-gallery');
    
    fightersData.forEach(fighter => {
        const card = document.createElement('div');
        card.className = 'fighter-card';
        card.innerHTML = `
            <img src="${fighter.image}" alt="${fighter.name}" class="fighter-img">
            <div class="fighter-info">
                <h3 class="fighter-name">${fighter.name}</h3>
                <p class="fighter-role">${fighter.role}</p>
                <p>${fighter.description}</p>
            </div>
            <div class="fighter-quote">${fighter.quotes[0]}</div>
        `;
        
        gallery.appendChild(card);
    });
    
    // Search functionality
    document.getElementById('fighter-search').addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase();
        const cards = document.querySelectorAll('.fighter-card');
        
        cards.forEach(card => {
            const name = card.querySelector('.fighter-name').textContent.toLowerCase();
            card.style.display = name.includes(searchTerm) ? 'block' : 'none';
        });
    });
}

// National Anthem
function playAnthem() {
    const anthem = document.getElementById('anthem');
    const btn = document.getElementById('anthem-btn');
    
    if (anthem.paused) {
        anthem.play();
        btn.textContent = 'Pause Vande Mataram';
    } else {
        anthem.pause();
        btn.textContent = 'Play Vande Mataram';
    }
}