def char_count(str):
  letters_dict = {}
  letters_list = []
  for letter in str:
    if letter != ' ':
      if letters_dict.get(letter) == None:
        letters_dict[letter] = 1
      else:
        letters_dict[letter] += 1
  for elem in letters_dict:
    letters_list.append([elem, letters_dict[elem]])
  alphabetical = sorted(letters_list, key=lambda x:x[0])
  return sorted(alphabetical, key=lambda x:x[1],reverse = True)
