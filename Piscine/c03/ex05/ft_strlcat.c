/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   ft_strlcat.c                                       :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: dohyulee <dohyulee@student.42seoul.kr>     +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2021/09/22 13:59:27 by dohyulee          #+#    #+#             */
/*   Updated: 2021/09/22 15:21:18 by dohyulee         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

unsigned int	get_len(char *set)
{
	unsigned int	i;

	i = 0;
	while (*set++ != '\0')
		i++;
	return (i);
}

unsigned int	ft_strlcat(char *dest, char *src, unsigned int size)
{
	unsigned int	dlen;
	unsigned int	slen;
	unsigned int	i;
	unsigned int	j;

	dlen = get_len(dest);
	slen = get_len(src);
	i = 0;
	j = dlen;
	while ((src[i]) && i + 1 + dlen < size)
	{
		dest[j++] = src[i++];
	}
	dest[j] = '\0';
	if (size < dlen)
		slen += size;
	else
		slen += dlen;
	return (slen);
}
