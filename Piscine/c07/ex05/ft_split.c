/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   ft_split.c                                         :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: dohyulee <dohyulee@student.42.fr>          +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2021/09/28 18:48:31 by dohyulee          #+#    #+#             */
/*   Updated: 2021/09/28 20:29:30 by dohyulee         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

#include <stdlib.h>

int	is_in_set(char ch, char*charset)
{
	int		i;

	i = 0;
	while (charset[i])
	{
		if (ch == charset[i])
			return (1);
		i++;
	}
	return (0);
}

int	get_word_num(char*str, char*charset)
{
	int		i;
	int		j;
	int		word;

	i = 0;
	word = 0;
	while (str[i])
	{
		if (is_in_set(str[i], charset))
			i++;
		else
		{
			j = 0;
			while (!is_in_set(str[i + j], charset) && str[i + j])
				j++;
			word++;
			i = i + j;
		}
	}
	return (word);
}

void	fill_table(char *dest, char*src, int num)
{
	int	i;

	i = 0;
	while (i < num)
	{
		dest[i] = src[i];
		i++;
	}
	dest[i] = 0;
}

void	make_table(char**strs, char*str, char*charset)
{
	int		i;
	int		j;
	int		word;

	word = 0;
	i = 0;
	while (str[i])
	{
		if (is_in_set(str[i], charset))
			i++;
		else
		{
			j = 0;
			while (!is_in_set(str[i + j], charset) && str[i + j])
				j++;
			strs[word] = malloc(j + 1);
			fill_table(strs[word], str + i, j);
			word++;
			i = i + j;
		}
	}
}

char	**ft_split(char*str, char*charset)
{
	char	**strs;
	int		word;

	word = get_word_num(str, charset);
	strs = (char **)malloc(sizeof(char *) * (word + 1));
	if (str == NULL)
		return (0);
	strs[word] = 0;
	make_table(strs, str, charset);
	return (strs);
}
