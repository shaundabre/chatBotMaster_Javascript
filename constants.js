// Options the user could type in
const prompts = [

  //normal greeting questions

  ["hello", "hey", "good morning"],
  ["can you tell me something about your website"],
  ["i loved being with true comfort","i enjoyed my time with ture comfort","true comfort is the best"],
  ["goodbye"],

  //questions on website

  ["what is your organization planning to do"],
  ["what are the ways to join your organization"],
  ["how can we register to your organization"],
  ["where and how can we donate to your organization"],
  ["where can we get information regarding the memebers of your organization"],

  //dog related questions

  ["i want to ask questions regarding my dog","i want to ask something related to my dog"],
  ["my dog is turning pale what should i do"],
  ["what should i do to cure my dog"],
  ["what are the signs of dehydration dogs"],
  ["what should i do to rehydrate my dog"],
  ["how do we know dog has got fever"],
  ["what is the treatment we can give to a dog suffering from annemia"],
  ["how can i control the aggresive nature of my dog"],
  ["does your organization provide the facility of vaccination for dogs"],
  ["my dog is not enjoying its meal what must be the problem"],
  ["do you sell dog food"],
  ["what dog products do you provide"],

  //cat related questions

  ["i want to ask questions regarding my cat","i want to ask something related to my cat"],
  ["my cat is turning pale what should i do"],
  ["what should i do to cure my cat"],
  ["my cat is not enjoying its meal what must be the problem"],
  ["what diseases are cats more likely to have"],
  ["do you sell cat food"],
  ["are there any food items we mustn't let the cats eat"],
  ["what cat products do you provide"],

  //general questions 

  ["how can we rescue the wounded animals"],
  ["and what afetr rescuing them"],
  ["how does the organization help abandoned animals"],
  ["where can we get more information on pet welfare"],

  //location based questions

  ["how can we trace the location we want to find"]



]

// Possible responses, in corresponding order

const replies = [

//normal greeting answers

  ["Hello Welcome to True Comfort ","True Comfort Welcomes You!!","Greetings from True Comfort"],
  ["Sure Thing,What would you want to know?"],
  ["Pleasure!! Glad You Liked it--","Happy to know your Honest Opinion","Thank You very Much"],
  ["bye..come visit us again <3..."],

//answers on website

  ["Ours is a PET CARE website developed for welfare of of animal care!!"],
  ["You can join our organization as a vet,volunteer and chemist"],
  ["You can register by going to the page available "],
  ["You can donate by going in the donate section and there you shall get the link where you can donate some amount to the organization"],
  ["You can check by going in the members section and there you shall get information regarding the members"],

//dog related answers

  ["Yes For Sure!!.What may you want to know","Yes Ask Anything"],
  ["Pale or White Gums mean that your dog could be suffering from anemia, shock, blood clotting disorders, internal bleeding, or heart disease."],
  ["Medications and/or surgery may be needed to treat the main cause of blood loss. In cases where the red blood cells are being destroyed \nor not being properly created, then long term medications may be needed."],
  ["The loss of moisture in your dog's gums, causing them to become dry and sticky with thick, pasty saliva. Loss of appetite, panting, \nand a dry nose are other signs of dehydration. Your dog's eyes may even become sunken or they might collapse if they enter shock, \nin extreme cases."],
  ["Here's how you can keep your dog hydrated, even if they don't want to drink enough water \n1 Provide More Water Bowls.\n2 Get A Doggy Drinking Fountain.\n3 Make A Doggy Smoothie.\n4 Add Water To Your Dog's Food.\n5 Make Doggy Ice Pops.\n6 Wash Water Bowls Daily.\n7 Get A Bigger Dog Bowl.\n8 Offer Water From Your Hand."],
  ["The most common symptoms of a fever in dogs are:\n1 Red or glassy-looking eyes.\n2 Warm ears and/or nose.\n3 Shivering.\n4 Panting.\n5 Runny nose.\n6 Decreased energy.\n7 Loss of appetite.\n8 Coughing."],
  ["Often, the recovery period for dogs suffering from chronic blood loss is good and quick if the cause of blood loss is treated quickly. \nDogs with anemia due to bone marrow malfunction may take months to recover and still may require further treatment."],
  ["These are some tried and true tips that can help prevent the development of aggression in dogs:\n1 Discourage dominant behaviors.\n2 Watch out for signs of resource guarding.\n3 Pay attention to socialization - both with other pets and strangers.\n4 Use positive reinforcement training."],
  ["When dogs come in for their first one year visit, we recommend boostering their DHPP, Leptospirosis, \nand Rabies vaccines as well as Canine Influenza and Lyme if the lifestyle of the dog requires these vaccines. \nIf Kennel Cough (Bordetella) is due at this time, it should also be administered."],
  ["Dogs may go off their food because of changes in their environment, stress, an adverse reaction to drugs, \nand nausea. Dental problems, pain and internal obstructions can also cause dogs to lose their appetite.\nTry adding some raw stuff in it animals usually do get hungry just by raw smell"],
  ["Yes We do sell dog food products. Here are some products u can purchase.\n1 Pedigree.\n2 Drools.\n3 Meat Up.\n4 Chappi.\n5 Purepet.\n6 Royal Canin.\n7 Purina."],
  ["Yes we do provide dog products of best quality.\n1 Glycerine Dog Bathing Bar.\n2 Centox Pet Soap, For Clinic Purpose,\n3 Pet All Clear Soap.\n4 EC Free Permethrin Permethrin Soap 5%,\n5 Ectoparasites,\n6 Dotper Pet Soap \n7 Tak Herbals Graf Anti Tick Soap Pet Soap, For Clinic Purpose \n8 Dog neck belts of variow types,etc"],

//cat related answers

  ["Yes For Sure!!. what may you want to know","Yes Ask Anything"],
  ["Pale gums and lethargy indicate the need to perform blood tests. \nAnemic cats also have little stamina or energy so they seem listless or tire more easily. \nAnemic cats may have signs of blood loss . \nPale gums and lethargy indicate the need to perform blood tests"],
  ["If your cat is found to be iron deficient, you can help improve his iron count by adding iron-rich foods to her diet, in addition to cat food brands high in iron. \nIron supplements can also help."],
  ["So be sure to pay attention if your cat suddenly stops eating. A number of different conditions may be responsible, including infections, kidney failure, pancreatitis, intestinal problems, and cancer. \nBut it isn't always serious -- something as simple as a toothache can make your cat stop eating."],
  ["Cats are prone to most likely have ...\n1 Cat scratch disease.\n2 Roundworms.\n3 Toxoplasmosis.\n4 Rabies.\n5 Campylobacteriosis.\n6 Salmonellosis.\n7 Cryptosporidiosis.\n8 Giardiasis"],
  ["Yes!. We sell cat food products like..\n1 Almond.\n2 Anise.\n3 Anjou.\n4 Barley.\n5 Basil.\n6 Bean.\n7 Berry.\n8 Bing."],
  ["Yes there are some food stuff cats mustn't be allowed to eat or else it will cuase them trouble. Here are common ingredients in cat food to avoid:\n1.Corn.\n2.Rice.\n3.Soy.\n4.Brewers yeast and rice.\n5.Wheat.\n6.Sugar.\n7.Meat by-products and meat and bone meal.\n8.Animal digest."],
  ["We provide a variety of cat products like bathing soap,lotion aftr bathing cat biscuits,etc"],

//general questions 

  ["When you will see a wounded animal you need to send your location then we will trace you and reach there with our team"],
  ["We will treat them to earliest medications possible,we are always ready to help animals in need"],
  ["when you find any abandoned or homeless pet what you can do is post the photo of pet on the website via account created"],
  ["If you need any other information,then you can go to our help section"],

// location based answer

  ["This is how you can trace location https://miniproject-a688d.web.app/map.html"]



]

// Random for any other user input

const alternative = [
  "Same",
  "Go on...",
  "Try again",
  "I'm listening...",
  "I don't understand :/"
]