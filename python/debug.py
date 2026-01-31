def restore_string(text):
  result = []
  i = 0

  while(i < len(text)):
    if(text[i] == '@'):
      for j in range(0, int(text[i+1])):
        result.append(text[i+2])
      i += 2
    else: 
      result.append(text[i])
      i += 1
  return ''.join(result)


print(restore_string("XY@6Z1@4023"))