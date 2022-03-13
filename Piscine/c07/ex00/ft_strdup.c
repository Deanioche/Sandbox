/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   ft_strdup.c                                        :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: dohyulee <dohyulee@student.42seoul.fr>     +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2021/09/26 17:51:52 by dohyulee          #+#    #+#             */
/*   Updated: 2021/09/26 18:52:53 by dohyulee         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

#include <stdlib.h>

int	ft_len(char *src)
{
	int	i;

	i = 0;
	while (src[i] != '\0')
		i++;
	return (i);
}

char	*ft_strdup(char *src)
{
	char	*res;
	int		i;

	res = malloc(sizeof(src) * ft_len(src));
	if (!res)
		return (0);
	else
	{
		i = 0;
		while (src[i] != '\0')
		{
			res[i] = src[i];
			i++;
		}
		res[i] = '\0';
		return (res);
	}
}
