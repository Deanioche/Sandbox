/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   ft_strncat.c                                       :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: dohyulee <dohyulee@student.42seoul.kr>     +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2021/09/22 13:54:15 by dohyulee          #+#    #+#             */
/*   Updated: 2021/09/22 15:06:02 by dohyulee         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

char	*ft_strncat(char *dest, char *src, unsigned int nb)
{
	char	*tmp;

	tmp = dest;
	while (*tmp != '\0')
		tmp++;
	while (*src != '\0' && nb > 0)
	{
		*tmp++ = *src++;
		nb--;
	}
	*tmp = '\0';
	return (dest);
}
