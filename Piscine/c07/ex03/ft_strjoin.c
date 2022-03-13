/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   ft_strjoin.c                                       :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: dohyulee <dohyulee@student.42seoul.kr>     +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2021/09/27 13:53:45 by dohyulee          #+#    #+#             */
/*   Updated: 2021/09/29 14:32:56 by dohyulee         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

#include <stdlib.h>

char	ft_strlen(char *str)
{
	int	i;

	i = 0;
	while (str[i] != '\0')
		i++;
	return (i);
}

char	*ft_strcat(char *dest, char *src)
{
	int	i;
	int	j;

	i = 0;
	j = 0;
	while (dest[i])
		i++;
	while (src[j])
	{
		dest[i + j] = src[j];
		j++;
	}
	dest[i + j] = '\0';
	return (dest);
}

int	arr_len(int size, char **strs, char *sep)
{
	int	i;
	int	sep_len;
	int	res;

	sep_len = ft_strlen(sep);
	i = 0;
	res = 0;
	while (i < size)
	{
		res += ft_strlen(strs[i]);
		if (i < size - 1)
			res += sep_len;
		i++;
	}
	return (res);
}

char	*init_arr(int size, char **strs, char *sep)
{
	char	*arr;
	int		len;

	if (size == 0)
	{
		arr = malloc(1);
		if (!arr)
			return (0);
		*arr = 0;
		return (arr);
	}
	else
	{
		len = arr_len(size, strs, sep);
		arr = malloc(len + 1);
		if (!(arr))
			return (0);
		*arr = 0;
	}
	return (arr);
}

char	*ft_strjoin(int size, char **strs, char *sep)
{
	char	*res;
	int		i;

	res = init_arr(size, strs, sep);
	i = 0;
	while (i < size)
	{
		res = ft_strcat(res, strs[i]);
		if (i < size - 1)
			res = ft_strcat(res, sep);
		i++;
	}
	return (res);
}
